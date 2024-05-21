import React from 'react'
import UserMenu from '../../components/UserMenu'
import {useAuth} from "../../context/auth"
const Dashboard = () => {
  const [auth]=useAuth();
  return (
    <div className='dashboard-container'>
    <UserMenu/>
    <div className="sellerDetails">
        <h1>{auth?.user?.first_name + auth?.user?.last_name } </h1>
        <h1>{auth?.user?.email} </h1>    
    </div>
</div>
  )
}

export default Dashboard