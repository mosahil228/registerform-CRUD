import React from 'react'
import logo from "../images/logo.svg"
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import {useSelector } from 'react-redux';
const Footer2 = () => {


    const mode = useSelector((state) => {
        return state.user;
    })
    return (
        <>
            <footer>
                <div className="footer">
                    <div className='main-footer'>
                        <div className='footer-item'>
                            <div className='left-footer'>
                                <img src={logo} alt="logo"/>
                                <span>Copyright © 2023 CodeWithSahil</span>
                            </div>
                            <div className='right-footer'>
                                <span>Social media links</span>
                                <div>
                                <a
                                    href="https://www.linkedin.com/in/mosahil228"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <FaGithub style={{color:mode.darkMode.setDark?mode.darkMode.textLight:""}}/>
                                </a>
                                <a
                                    href="https://github.com/mosahil228"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <IoLogoLinkedin style={{color:mode.darkMode.setDark?mode.darkMode.textLight:""}}/>
                                </a>
                                <a
                                    href="https://www.instagram.com/sahillll._._/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <FaInstagram style={{color:mode.darkMode.setDark?mode.darkMode.textLight:""}}/>
                                </a>
                                

                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer2
