import useSWR from 'swr'
import axios from '@/lib/axios'
import { useParams, useRouter } from 'next/navigation'
import React, { use, useEffect, useState } from 'react'
import Cookies from 'js-cookie';

interface AuthProps {
    middleware?: string | null;
    redirectIfAuthenticated?: string | null;
}
//props verfication code
interface VerifyEmailProps {
    code: string;
    email: string;
}

type setErrorProp = {
    setErrors: (value: string) => void;
};

interface ResetPasswoerdProps {
    token: string;
    email: string;
    password: string;
    password_confirmation: string;
}
interface RegisterProps {
    first_name: string;
    last_name: string;
    birthdate: string;
    email: string;
    password: string;
    password_confirmation: string;
}

interface LoginProps {
    email: string;
    password: string;
    remember: boolean;
}

export const useAuth = ({ middleware, redirectIfAuthenticated }: AuthProps) => {
    const router = useRouter()
    const params = useParams()
    const [isLoading2, setIsLoading2] = useState<boolean>(false);


    const { data: user, error, mutate, isLoading } = useSWR('/api/user', () => {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) return null;
    
        return axios
            .get('/api/user', {
                headers: {
                    Authorization: `Bearer ${accessToken}`, // include the token in the headers
                }
            })
            .then(res => {
                console.log(res.data);
                return res.data;
            })
            .catch(error => {
                console.log(error);
                if (error.response.status === 409) router.push('/verify-email');
            });
    });

    const signup = async ({ setErrors, props }: { setErrors: (value: string) => void, props: RegisterProps }) => {
        setIsLoading2(true);
        axios
            .post('api/register', props)
            .then(() => {
                router.push('/login')
                mutate();
            })
            .catch(error => {
                setErrors(error.response.data?.errors?.email[0]);
            })
            .finally(() => {
                setIsLoading2(false);
            });
    };


    const login = async ({ setErrors, props }: { setErrors: (value: string) => void, props: LoginProps }) => {
        console.log(props)
        axios
            .post('api/login', props)
            .then((response) => {
                const { access_token, refresh_token, expires_in, refresh_expires_in } = response.data;
                storeTokens({ accessToken: access_token, refreshToken: refresh_token, accessTokenExpiry: Date.now() + expires_in * 1000, refreshTokenExpiry: Date.now() + refresh_expires_in * 1000 })
                    mutate()
            }
            )
            .catch(error => {
                setErrors(error.response.data.message)
                console.log(error.response.data.message)
            })
    }

    const forgotPassword = async ({ setErrors, email }: { setErrors: (value: string) => void, email: string }) => {

        setErrors("")

        await axios
            .post('api/forgot-password', { email },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                }
            )
            .then(response => { }
            )
            .catch(error => {
                console.log(error.response)
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resetPassword = async ({ setErrors, props }: { setErrors: (value: string) => void, props: ResetPasswoerdProps }) => {

        setErrors("")
        console.log(props)
        await axios
            .post('api/reset-password', props,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                }
            )
            .then(response =>
                router.push('/login?reset=' + btoa(response.data.status)),
            )
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }


    const resendEmailVerification = async ({ setStatus }: { setStatus: any }) => {
        await axios
            .post('api/email/verification-notification',
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                }
            )
            .then(response => setStatus(response.data.status))
    }

    const logout = async () => {
        if (!error) {
            const accessToken = localStorage.getItem('access_token');
            await axios.post('api/logout',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            ).then(() => {
                removeTokens()
                mutate(null)
            }
            )
        }
        window.location.pathname = '/login'
    }

    const verifyCode = async ({ setErrors, props }: { setErrors: (value: string) => void, props: VerifyEmailProps }) => {
        setErrors("")
        await axios
            .post('api/verify-code', props,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                }
            )
            .then(() =>
                router.push('/login')
            )
            .catch((error) => {
                setErrors(error.response.data.error)
            }
            )
    }


    const setupTokenRefresh = () => {
        const refreshInterval = 5 * 60 * 1000; // 5 minutes before expiry

        setInterval(async () => {
            const accessTokenExpiry = localStorage.getItem('access_token_expiry');
            const refreshToken = localStorage.getItem('refresh_token');
            const refreshTokenExpiry = localStorage.getItem('refresh_token_expiry');

            if (!accessTokenExpiry || !refreshTokenExpiry || !refreshToken) return;

            //convert to number
            const accessTokenExpiryNum = Number(accessTokenExpiry);
            const now = Date.now();

            // Check if the access token will expire soon
            if (now >= accessTokenExpiryNum - refreshInterval) {
                // Refresh the token
                try {
                    const response = await axios.post('/api/refresh', {}, {
                        headers: { Authorization: `Bearer ${refreshToken}` },
                    });

                    const { access_token, refresh_token, expires_in } = response.data;

                    // Calculate new expiry times
                    const newAccessTokenExpiry = now + expires_in * 1000;

                    // Store the new tokens and expiry times
                    storeTokens({ accessToken: access_token, refreshToken: refresh_token, accessTokenExpiry: newAccessTokenExpiry, refreshTokenExpiry });
                } catch (error) {
                    console.error('Error refreshing token:', error);
                    // Handle refresh token failure (e.g., logout user)
                }
            }
        }, refreshInterval);
    };


    const storeTokens = ({ accessToken, refreshToken, accessTokenExpiry, refreshTokenExpiry }: { accessToken: any, refreshToken: any, accessTokenExpiry: any, refreshTokenExpiry: any }) => {
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('refresh_token', refreshToken);
        localStorage.setItem('access_token_expiry', accessTokenExpiry); // Store expiry time in milliseconds
        localStorage.setItem('refresh_token_expiry', refreshTokenExpiry); // Store expiry time in milliseconds
    };
    const removeTokens = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('access_token_expiry');
    };
    //resend code 
    const resendCode = async ({ setErrors, email }: { setErrors: (value: string) => void, email: string }) => {
        setErrors("")
        await axios
            .post('api/resend-code', { email })
            .then(() =>
                router.push('/login')
            )
            .catch((error) => {
                setErrors(error.response.data.errors)
            }
            )
    }
    useEffect(() => {
        console.log('user', user)
        console.log('middleware', middleware)
        console.log('redirectIfAuthenticated', redirectIfAuthenticated)
           /* if (
                user  &&
                !user?.email_verified_at
            )
                router.push('/verifyemail?email=' + user?.email) */
    
            if (middleware === 'auth' && !user) {
                router.push('/login')
                return;
            }
            if(middleware=="auth" && user){
                router.push('/')
            }
            if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        signup,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
        isLoading,
        verifyCode,
        resendCode,
        isLoading2,
        setupTokenRefresh
    }
}