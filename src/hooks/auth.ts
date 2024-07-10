import useSWR from 'swr'
import axios from '@/lib/axios'
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { sign } from 'crypto';
interface AuthProps {
    middleware?: string | null;
    redirectIfAuthenticated?: string | null;
}
//props verfication code
interface VerifyEmailProps {
    code: string;
    email: string;
}

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

    const { data: user, error, mutate, isLoading } = useSWR('/api/user', () =>
        axios
            .get('/api/user')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error
                router.push('/verify-email')
            }),
    )
    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const signup = async ( {props} : {props : RegisterProps} ) => {
        await csrf()
        console.log(props)
        axios
            .post('api/register', props)
            .then(() => {
                router.push('/forgotPassword/step2?email=' + props.email)
                mutate()
            })
            .catch(error => {
                throw error

            })
    }

    const login = async ({ setErrors, setStatus, props }: { setErrors: any, setStatus: any, props: LoginProps }) => {
        await csrf()
        setErrors([])
        setStatus(null)
        console.log(props)
        axios
            .post('api/login', props)
            .then(() => {
                mutate()
            }
            )
            .catch(error => {
                setErrors(error.response.data.errors)
                console.log(error.response.data.errors)
            })
    }

    const forgotPassword = async ({ setErrors, setStatus, email }: { setErrors: any, setStatus: any, email: string }) => {
        await csrf()
        setErrors([])
        setStatus(null)

        axios
            .post('api/forgot-password', { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                console.log(error.response)
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resetPassword = async ({ setErrors, setStatus, props }: { setErrors: any, setStatus: any, props: ResetPasswoerdProps }) => {
        await csrf()
        setErrors([])
        setStatus(null)
        console.log(props)
        axios
            .post('api/reset-password', props)
            .then(response =>
                router.push('/login?reset=' + btoa(response.data.status)),
            )
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }


    const resendEmailVerification = ({ setStatus }: { setStatus: any }) => {
        axios
            .post('api/email/verification-notification')
            .then(response => setStatus(response.data.status))
    }

    const logout = async () => {
        if (!error) {
            await axios.post('api/logout').then(() => mutate())
        }

        window.location.pathname = '/login'
    }

    const verifyCode = async ({ setErrors, props }: { setErrors: any, props: VerifyEmailProps }) => {
        setErrors("")
        await axios
            .post('api/verify-code', props)
            .then(() =>
                router.push('/login')
            )
            .catch((error) => {
                setErrors(error.response.data.errors)
            }
            )

    }

    useEffect(() => {
        console.log('middleware', middleware)
        console.log('redirectIfAuthenticated', redirectIfAuthenticated)
        if (middleware === 'guest' && redirectIfAuthenticated && user)
            router.push(redirectIfAuthenticated)
        if (
            window.location.pathname === '/verify-email' &&
            user?.email_verified_at
        )
            router.push(redirectIfAuthenticated || "")
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
        verifyCode
    }
}