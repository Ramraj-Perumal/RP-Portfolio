import React, { useState } from 'react'
import { FaPhone } from "react-icons/fa6"
import { IoMenu } from "react-icons/io5"
import { FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        { id: 1, menu: "Home", link: "home" },
        { id: 2, menu: "About", link: "about" },
        { id: 3, menu: "Skills", link: "skills" },
        { id: 4, menu: "Projects", link: "projects" },
        { id: 5, menu: "Contact", link: "contact" },
    ];

    return (
        <div>
            <div className='bg-primary w-full fixed z-10'>
                <div className="container py-2 sm:py-0">
                    <div className='flex items-center justify-between'>
                        <div>
                            <Link
                                to='home'
                                smooth
                                duration={500}
                            >
                                <span className='text-3xl text-orange font-bold cursor-pointer'>R<span className='text-white'>P</span></span>
                            </Link>
                        </div>
                        <div className='hidden sm:block'>
                            <ul className='flex items-center gap-8 text-gray-500 duration-300'>
                                {links.map(({ menu, id, link }) => (
                                    <li key={id}>
                                        <a
                                            className='inline-block sm:text-sm md:text-lg lg:text-xl font-medium py-5 hover:text-white hover:scale-110'
                                            href={link}>
                                            <Link to={link} smooth duration={500}>
                                                {menu}
                                            </Link>
                                        </a>
                                    </li>
                                ))}
                                <li className='text-orange flex items-center justify-end font-semibold hover:text-white cursor-pointer hover:scale-110'>
                                    <FaPhone className='mr-1' />
                                    9600154881
                                </li>
                            </ul>
                        </div>
                        <div onClick={() => setNav(!nav)} className='text-white items-center z-10 cursor-pointer text-3xl mr-1 sm:hidden'>
                            {nav ? <FaTimes size={20} /> : <IoMenu size={30} />}
                        </div>

                        {nav && (
                            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-primary to-secondary text-gray-500">
                                {links.map(({ id, menu, link }) => (
                                    <li
                                        key={id}
                                        className="px-4 cursor-pointer capitalize py-3 text-2xl"
                                    >
                                        <Link
                                            onClick={() => setNav(!nav)}
                                            to={link}
                                            smooth
                                            duration={500}
                                        >
                                            {menu}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar