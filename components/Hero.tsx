import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='pb-10'>
        <div className='relative flex flex-col items-center justify-center' style={{ height: '40vh' }}>
            <div className='absolute top-0 left-0 w-full h-full z-[-1]'>
                <Image src="/hero_banner.webp" alt='barbershop' fill={true} style={{ objectFit: 'cover' }} />
            </div>
            <div className='text-white padding-container max-container gap-5 flex items-center justify-center flex-col text-center'>
                <Image src="/dudo-circle-white copy.webp" width={200} height={200} alt='logo'/>
                <h1 className='text-2xl md:text-4xl font-semibold'>Ápolt és stílusos megjelenés számodra.</h1>
                <p className=''>Legyen az egy friss, divatos hajvágás, egy precízen megformázott arcszőrzet vagy egy igényesen kialakított szakáll.</p>
                <motion.a 
                whileHover={{ scale: 1.1 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                whileTap={{ scale: 0.8 }} href="tel:+36303171366" className='text-xl font-semibold transition transform border p-3 hover:bg-white hover:text-black'>
                  +36 30 317 1366
                  </motion.a>
            </div>
        </div>
    </section>
  )
}

export default Hero