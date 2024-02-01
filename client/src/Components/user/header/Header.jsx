import React, { useState } from 'react'
import logo from '/logo.png'
import { NavLink } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { AiFillMessage } from "react-icons/ai";
import { IoNotificationsCircleSharp } from "react-icons/io5";


function Header() {
    let links = [
        { name: <AiFillMessage />, link: "/message", content: "Message" },
        { name: <IoNotificationsCircleSharp />, link: "/notification", content: "Notification" },
        { name: <CgProfile />, link: "/profile", content: "Profile" },
    ];
    let [open, setOpen] = useState(false)
    return (
        <>
        {/* fixed =>to set navbar always there */}
            <div className='shadow-md w-full  top-0 left-0'>
                <div className='md:flex bg-black py-4 md:px-10 px-4 items-center justify-between sm:h-px md:h-10 lg:h-20'>
                    {/* logo and name */}
                    <div className='text-4xl text-white ml-2 transform transition duration-150 ease-in-out hover:scale-110 
                    hover:translate-x-2 '>
                        <NavLink to='/' className=' text-white hover:text-opacity-75 no-underline font-pS'>
                            <span >
                                <img src={logo} alt="SC" className='w-12 inline-block mr-2' />
                            </span>
                            sc kingdom
                        </NavLink>
                    </div>
                    {/* heading */}
                    <div className='transform transition duration-150 ease-in-out hover:scale-110 hover:translate-x-2'>
                        <h1 className='text-white  hover:text-opacity-75 no-underline font-cG text-6xl sm:text-4xl md:text-5xl '>
                            World of Jobs</h1>
                    </div>

                    {/* nav itema */}
                    <div onClick={() => setOpen(!open)} className='bg-white text-4xl absolute right-8 top-6 cursor-pointer md:hidden' >
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] 
                    left-0 w-full md:w-auto md:pl-0 pl-9transition-all duration-500 ease-in ${open ? 'top-30' : 'top-[-490px]'} opacity-100`}>
                        {links.map((item) => {
                            return (
                                <li key={item.name} className='md:ml-6  md:my-0 my-7 text-4xl transform transition duration-150 
                                ease-in-out 
                                hover:scale-110 hover:translate-x-2'>
                                    <NavLink className='text-white hover:text-opacity-75 no-underline ' to={item.link}>{item.name}{open?item.content:null }</NavLink>
                                </li>
                            );
                        })}
                        {/* <Button>hahahha</Button> */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header