import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='max-container padding-container'>
        <div className="px-4 pt-16 mt-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="sm:col-span-2">
                <div className="mt-6 lg:max-w-sm">
                    <p className="text-xs text-gray-300">
                    Fedezz fel egy felejthetetlen élményt <span className='text-main-red'>DUDOCUTZ</span>, ahol a hajvágás találkozik a hagyománnyal.
                    </p>
                    <p className="mt-4 text-xs text-gray-300">
                    Várunk szeretettel üzletünkben!
                    </p>
                </div>
                <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center pt-4">
                    <Image src="/dudo-circle-white copy.webp" width={100} height={20} alt='Logo' />
                </a>
                </div>
                <div className="space-y-2 text-xs">
                <p className="text-base font-bold tracking-wide text-main-red">Contacts</p>
                <div className="flex">
                    <p className="mr-1 text-gray-300">Telefonszám:</p>
                    <a href="tel:06-30-317-1366" aria-label="Our phone" title="Our phone" className="transition-colors duration-300 text-main-red">+36 30 317 1366</a>
                </div>
                <div className="flex">
                    <p className="mr-1 text-gray-300">Email:</p>
                    <a href="mailto:dudocutz@gmail.com" aria-label="Our email" title="Our email" className="transition-colors duration-300  text-main-red">dudocutz@gmail.com</a>
                </div>
                <div className="flex">
                    <p className="mr-1 text-gray-300">Cím:</p>
                    <a href="https://maps.app.goo.gl/GyqF5CpbUDLD7zQD9" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" className="transition-colors duration-300 text-main-red">
                    Garam utca 6. Verőce 2621
                    </a>
                </div>
                </div>
                <div>
                <span className="text-base font-bold tracking-wide text-main-red">Social</span>
                <div className="flex items-center mt-1 space-x-3">
                    <Link href="https://www.instagram.com/dudocutz" target='_blank' className="text-gray-300 transition-colors duration-300">
                    <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                        <circle cx="15" cy="15" r="4"></circle>
                        <path
                        d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                        ></path>
                    </svg>
                    </Link>
                    <Link href="https://www.facebook.com/dudocutz" target='_blank' className="text-gray-300 transition-colors duration-300">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                        <path
                        d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                        ></path>
                    </svg>
                    </Link>
                </div>
                <p className="mt-4 text-xs text-gray-300">
                Kövess minket a közösségi médián, hogy mindig naprakész legyél az újdonságainkkal és eseményeinkkel kapcsolatban! Csatlakozz közösségünkhöz és oszd meg velünk élményeidet!
                </p>
                </div>
            </div>
            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p className="text-sm text-gray-300">
                © Copyright 2024 Dudocutz - Minden jog fentarva.
                </p>
                <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                <li>
                    <Link href="/adatvedelmi_iranyelvek" className="text-sm text-gray-300 transition-colors duration-300">Adatvédelmi irányelvek</Link>
                </li>
                <li>
                    <Link href="/felhasznalasi_feltetelek" className="text-sm text-gray-300 transition-colors duration-300">Felhasználási feltételek</Link>
                </li>
                </ul>
            </div>
            </div>
    </footer>
  )
}

export default Footer