import React, { useState } from 'react'
import logo from "../images/logo.svg"
import { Link, NavLink } from "react-router-dom";
import { useAuth } from '../context/auth';
import toast from 'react-hot-toast';
import SearchInput from './Form/SearchInput';
import useCategory from '../hooks/useCategory';
import { useCart } from '../context/cart';
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";




const Navbar = () => {
    const [cart] = useCart();
    const [auth, setAuth] = useAuth();
    const categories = useCategory();
    const [hideInfo, setHideInfo] = useState(false)
    //logout functionality
    const handleLogout = () => {
        setAuth({
            ...auth, user: null, token: ""
        })
        localStorage.removeItem('auth')
        toast.success("Logged out Successfully")
    }

    return (

        <header>
            <nav>
                <div className="navLeft">
                    <Link to='/' ><div className='logo' style={{ cursor: "pointer" }}>
                        <img src={logo} alt="logo" />
                    </div></Link>
                    <div className="navSearch">
                        <SearchInput />
                    </div>
                </div>
                <div className="navRight">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/categories">Categories
                    </NavLink>
                   
                    {!auth.user ? (<>
                        <NavLink to="/login"><button className='sign_in'>SIGN IN</button></NavLink>
                        <NavLink to="/signup"><button className='sign_up'>SIGN UP</button></NavLink>
                    </>) : (<>
                        <div className='userLoggedIn' onClick={() => setHideInfo(!hideInfo)}>
                            {/* <NavLink>{auth?.user?.first_name}</NavLink> */}
                            <NavLink className="cartNav"><FaRegUser /></NavLink>
                            {hideInfo && <div className='userMenu'>
                                <div className='userMenuItems' >
                                    <NavLink to={`/dashboard/${auth?.user?.user_type === 1 ? 'seller' : 'buyer'}/profile`}>
                                        <div><h3 style={{fontStyle:"italic",opacity:"0.5"}}>Hi, {auth?.user?.first_name}</h3></div>
                                    </NavLink>
                                    <NavLink to={`/dashboard/${auth?.user?.user_type === 1 ? 'seller' : 'buyer'}`}>
                                        <div><h3 >Dashboard</h3></div>
                                    </NavLink>
                                    <NavLink onClick={handleLogout} to="/login"><div><h3 >Logout</h3></div></NavLink>
                                </div> </div>}
                        </div>

                    </>)}
                    <NavLink to="/cart" className="cartNav"><FiShoppingCart />
                        <span > {cart?.length}</span>
                    </NavLink>



                </div>
            </nav>
        </header>

    )
}

export default Navbar