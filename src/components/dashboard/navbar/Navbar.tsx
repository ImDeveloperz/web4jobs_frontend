'use client'
import Notification from '../utils/notification/Notification'
import Profile from '../utils/profile/Profile'
import Search from '../utils/search/Search'

const Navbar = ({user,logout} : {user : any , logout:any}) => {
  

  const onLogout = async () => {
    await logout()
  }
  return (
    <div className='bg-secondary-color flex-2 flex justify-between rounded-b-xl p-6 w-full '>
      <div className='xl:w-[30%] lg:w-[40%] md:w-[50%] w-[60%]  '>
      <Search />
      </div> 
      <div className='flex md:gap-4 gap-2'>
        <Notification />
        <Profile user={user} logout={onLogout} /> 
      </div>
    </div>
  )
}

export default Navbar