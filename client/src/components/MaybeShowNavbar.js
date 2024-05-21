import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'

const MaybeShowNavbar = ({children}) => {
    const location=useLocation();
    const[showNav,setShowNav]=useState(false)
    useEffect(()=>{
        if((location.pathname==='/login')||(location.pathname==='/signup')||(location.pathname.includes("episodes"))){
            setShowNav(false)
        }else{
            setShowNav(true);
        }
    },[location])
  return (
    <div style={{display:"flex"}}>{showNav&&children}</div>
  )
}

export default MaybeShowNavbar