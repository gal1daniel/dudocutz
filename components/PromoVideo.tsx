import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { IoCaretForwardCircle } from "react-icons/io5";

const PromoVideo = () => {
  return (
    <section className='pb-10'>
        <div className='relative flex flex-col items-center justify-center' style={{ height: '40vh' }}>
            <div className='absolute top-0 left-0 w-full h-full z-[-1]'>
                <Image src="/video.webp" alt='barbershop' fill={true} style={{ objectFit: 'cover' }} className='opacity-25' />
            </div>
            <div className='text-white padding-container max-container gap-5 flex items-center justify-center flex-col text-center'>
                <h1 className='text-2xl md:text-4xl font-semibold'>NEM GYŐZTELEK MEG? NA MAJD EZ!</h1>
                <Link href="https://youtu.be/Ek3b9SAIyzo" target="_blank">
                  <IoCaretForwardCircle className='w-[50px] h-[50px] hover:text-main-red hover:cursor-pointer' />
                </Link>
                <p className=''>Ha nekem nem sikerült, majd ez a videó meggyőz téged, hogy ellátogass szalonunkban. A bemutató videónkat a Social Cheese csapata készítette, aki olyan nagy nevekkel dolgozott, mint Azariah, Desh, 2okos, Lakatos Márk…</p>
            </div>
        </div>
    </section>
  )
}

export default PromoVideo