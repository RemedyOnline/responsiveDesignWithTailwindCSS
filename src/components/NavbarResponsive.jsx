import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IonIcon from '@reacticons/ionicons';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import logoImage from "../assets/images/RemedyOnline-Logo.png"

const NavbarResponsive = () => {

    let [open, setOpen] = useState(false);

    return (
        <header className='bg-slate-100'>
            <nav className='flex items-center gap-2 w-[92%]  mx-auto justify-between  py-2 bg-slate-200'>
                <div>
                    <a href="#" className='flex items-center gap-2'>
                        <i><img src={logoImage} alt="logo" className='w-16' /></i>
                        <p className='text-2xl font-medium text-slate-500'>EduBank</p>
                    </a>
                </div>
                <div className={`sm:static sm:min-h-fit sm:w-auto md:min-h-fit md:w-auto md:z-auto z-[-1] px-12 absolute bg-slate-300 min-h-[40vh] left-0 w-full flex items-center transition-all duration-500 ease-in-out ${open ? 'top-20 opacity-100' : 'top-[-500px] md:opacity-100 opacity-0'}`}>
                    <ul className='flex sm:items-center sm:gap-1 sm:flex-row md:items-center gap-2 md:flex-row flex-col transition-all duration-1000 ease-in-out'>
                        <li><a href="#" className='sm:text-base md:text-lg px-2 py-1 hover:bg-slate-500 hover:text-white rounded'>Loise</a></li>
                        <li><a href="#" className='sm:text-base md:text-lg px-2 py-1 hover:bg-slate-500 hover:text-white rounded'>Home</a></li>
                        <li><a href="#" className='sm:text-base md:text-lg px-2 py-1 hover:bg-slate-500 hover:text-white rounded'>Books</a></li>
                        <li><a href="#" className='sm:text-base md:text-lg px-2 py-1 hover:bg-slate-500 hover:text-white rounded'>Authors</a></li>
                        <li><a href="#" className='sm:text-base md:text-lg px-2 py-1 hover:bg-slate-500 hover:text-white rounded'>Genres</a></li>
                        <li><a href="#" className='sm:text-base md:text-lg px-2 py-1 hover:bg-slate-500 hover:text-white rounded'>About Us</a></li>
                        <li><a href="#" className='sm:text-lg md:text-lg px-2 py-1 hover:bg-slate-500 hover:text-white rounded'>Contact Us</a></li>
                    </ul>
                </div>
                <div className='flex items-center gap-2'>
                    <button type="submit" className='px-5 py-2 border-2 rounded font-medium text-slate-500 hover:underline hover:bg-slate-200'>Login</button>
                    <button type="submit" className='px-5 py-2 bg-slate-500 rounded text-white font-medium hover:underline hover:bg-slate-700'>Sign Up</button>
                </div>
                <div onClick={() => setOpen(!open)} className='menuIcon text-slate-500 mx-2 cursor-pointer md:hidden text-2xl'>
                    <IonIcon name={open ? 'close' : 'menu'} />
                    {/* <IonIcon name="close" /> */}
                </div>
            </nav>
        </header >

    )
}

export default NavbarResponsive