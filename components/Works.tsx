import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';

const Works = () => {
  return (
    <section id='Munkaim' className='max-container padding-container'>
        <div>
            <div className='text-white flex flex-col justify-center items-center gap-5 text-center pb-10'>
                <p className='text-3xl'>MUNKÁIM</p>
                <p className='text-sm md:w-1/2'>
                    Engedd, hogy stílusunk és precizitásunk által inspirálódj, miközben felfedezed férfi fodrászati munkáimat. Az egyedi frizurák és az igényes megjelenés garantáltan magabiztossá tesznek. Fedezd fel a lehetőségeket és légy az új stílus ikonja!
                </p>
            </div>
            {/* Grid container */}
            <div className="flex flex-wrap gap-4 justify-center">
                {/* Map through the images */}
                {Array.from({ length: 6 }, (_, index) => (
                    <div
                        key={index}
                        className={`
                            w-full sm:w-1/3 md:w-1/4
                            flex justify-center items-center
                        `}
                    >
                        <Image
                            src={`/${index + 1}.webp`} // Assuming images are named as 1.webp, 2.webp, etc.
                            alt={`Image ${index + 1}`}
                            className="w-full h-auto hover:scale-105 transition transform"
                            width={500}
                            height={500}
                        />
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center py-10'>
                <motion.a 
                whileHover={{ scale: 1.1 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}
                whileTap={{ scale: 0.8 }}
                href="/galeria" 
                className='text-base text-white font-semibold transition transfrom border px-5 p-3 hover:bg-white hover:text-black'>
                    GALÉRIA
                </motion.a>
            </div>
            
        </div>
    </section>

  )
}

export default Works