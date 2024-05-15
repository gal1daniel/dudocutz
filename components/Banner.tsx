import React from 'react'
import { FiMapPin } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiUnlock } from "react-icons/fi";



const Banner = () => {
  return (
    <section className='max-container padding-container py-20'>
        <div className='flex justify-center items-center gap-10 flex-col md:flex-row'>

            <div className='flex flex-col justify-center text-center items-center pr-4 gap-3'>
                <FiMapPin className='text-main-red text-xl' />
                <p className='text-white font-semibold text-2xl'>CÍM</p>
                <p className='text-white font-sm'>Verőce, Garam utca 6.</p>
            </div>
            
            <div className='flex flex-col justify-center text-center items-center gap-3 md:border-r md:border-l border-main-red px-10'>
                <FiUnlock className='text-main-red text-xl' />
                <p className='text-white font-semibold text-2xl'>NYITVATARTÁS</p>
                <p className='text-white font-sm'>Hétfő-Péntek</p>
            </div>
            
            <div className='flex flex-col justify-center text-center items-center gap-3'>
                <FiPhone className='text-main-red text-xl' />
                <p className='text-white font-semibold text-2xl'>FOGLALÁS</p>
                <p className='text-white font-sm'>Foglalj most!</p>
            </div>

        </div>
    </section>

  )
}

export default Banner