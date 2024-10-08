import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import logoImage from "../assets/images/RemedyOnline-Logo.png"

const Navbar = () => {
    return (
        <header>
            <nav className='flex items-center gap-2 w-full justify-around bg-slate-100 py-2'>
                <div >
                    <a href="#" className='flex items-center gap-2'>
                        <i><img src={logoImage} alt="logo" className='w-16' /></i>
                        <p className='text-2xl font-medium text-slate-500'>EduBank</p>
                    </a>
                </div>
                <ul className='flex items-center gap-1'>
                    <li><a href="#" className='text-xl px-3 py-2 hover:bg-slate-500 hover:text-white rounded'>Home</a></li>
                    <li><a href="#" className='text-xl px-3 py-2 hover:bg-slate-500 hover:text-white rounded'>Books</a></li>
                    <li><a href="#" className='text-xl px-3 py-2 hover:bg-slate-500 hover:text-white rounded'>Authors</a></li>
                    <li><a href="#" className='text-xl px-3 py-2 hover:bg-slate-500 hover:text-white rounded'>Genres</a></li>
                    <li><a href="#" className='text-xl px-3 py-2 hover:bg-slate-500 hover:text-white  rounded'>About Us</a></li>
                    <li><a href="#" className='text-xl px-3 py-2 hover:bg-slate-500 hover:text-white rounded'>Contact Us</a></li>
                </ul>
                <div className='flex items-center gap-2'>
                    <button type="submit" className='px-5 py-2 border-2 rounded font-medium text-slate-500 hover:underline hover:bg-slate-200'>Login</button>
                    <button type="submit" className='px-5 py-2 bg-slate-500 rounded text-white font-medium hover:underline hover:bg-slate-700'>Sign Up</button>
                </div>
                <div className='menuIcon text-[#111] hidden'>
                    <i className=''>
                        <FontAwesomeIcon icon={faBars} />
                    </i>
                    {/* <i className='hidden'>
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </i> */}
                </div>
            </nav>
        </header>
    )
}

export default Navbar