"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { motion, useScroll } from 'framer-motion';

const Navbar = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const { scrollYProgress } = useScroll();

    const handleToggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <header className="z-30 fixed flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-black text-sm py-4">
            <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                <div className="flex items-center justify-between">
                    <a className="flex-none text-xl font-semibold text-white" href="/">Dudocutz</a>
                    <div className="sm:hidden">
                        <button
                            type="button"
                            onClick={handleToggleNav}
                            className="p-2 inline-flex justify-center items-center gap-x-2 rounded-lg text-white shadow-sm"
                            aria-controls="navbar-with-collapse"
                            aria-label="Toggle navigation"
                        >
                            <svg
                                className={isNavVisible ? 'hidden' : 'block'}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="3" x2="21" y1="6" y2="6" />
                                <line x1="3" x2="21" y1="12" y2="12" />
                                <line x1="3" x2="21" y1="18" y2="18" />
                            </svg>
                            <svg
                                className={isNavVisible ? 'block' : 'hidden'}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 6L6 18" />
                                <path d="M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    id="navbar-with-collapse"
                    className={`transition-all duration-300 overflow-hidden basis-full grow sm:block ${isNavVisible ? '' : 'hidden'}`}
                >
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                        <Link className="font-medium text-main-red" href="/" aria-current="page">Kezdőlap</Link>
                        <Link className="font-medium text-white hover:text-main-red" href="#Rolam">Rólam</Link>
                        <Link className="font-medium text-white hover:text-main-red" href="#Szolgaltatasok">Szolgáltatások</Link>
                        <Link className="font-medium text-white hover:text-main-red" href="#Munkaim">Munkáim</Link>
                    </div>
                </div>
                <motion.div
                    style={{
                        scaleX: scrollYProgress,
                        transformOrigin: '0% 0%',
                        height: '4px',
                        backgroundColor: 'rgb(193 39 50)',
                        width: '100%',
                        position: 'fixed',
                        top: '55px', // Adjust this value based on the actual height of your navbar
                        left: '0',
                        zIndex: '20',
                    }}
                />
            </nav>
        </header>
    );
};

export default Navbar;
