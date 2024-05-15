"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoChevronRight } from "react-icons/go";

const Social = () => {
  return (
    <section className='max-container padding-container py-20'>
        <div className='text-white flex flex-col justify-center items-center gap-5 text-center pb-10'>
            <p className='text-3xl'>SOCIAL MEDIA</p>
            <p className='text-sm md:w-1/2'>
            Kövess minket a közösségi média platformjainkon, hogy lépést tartva maradj a legfrissebb hajtrendekkel és inspirációval! Legyen részese a kreatív közösségünknek, ahol megoszthatod stílusod és különleges pillanataid
            </p>
        </div>
        <div className='flex justify-center items-center flex-col lg:flex-row gap-5'>
            <div className="hover:scale-105 transition transform max-w-sm rounded overflow-hidden shadow-lg border-gray-600 border">
                <Image className="w-full" src="/tiktok.webp" width={500} height={300} alt="Sunset in the mountains" />
                <div className="py-4 p-2">
                    <div className="font-bold text-xl mb-2 text-white">TIKTOK</div>
                    <p className="text-gray-300 text-base">
                    Csatlakozz hozzánk TikTokon, és kövesd a legfrissebb videóinkat, tippeket és trükköket a hajápolás és a stílus terén!
                    </p>
                </div>
                <div className="pt-4 p-2 pb-2 flex flex-row text-main-red items-center">
                    <Link href="https://www.tiktok.com/@borbelydudocutz" target='_blank'>TOVÁBB</Link> <GoChevronRight />
                </div>
            </div>
            <div className="hover:scale-105 transition transform max-w-sm rounded overflow-hidden shadow-lg border-gray-600 border">
                <Image className="w-full" src="/facebook.webp" width={500} height={300} alt="Sunset in the mountains" />
                <div className="py-4 p-2">
                    <div className="font-bold text-xl mb-2 text-white">FACEBOOK</div>
                    <p className="text-gray-300 text-base">
                    Kövess minket Facebookon, hogy ne maradj le a legújabb posztjainkról, eseményeinkről és különleges ajánlatainkról!
                    </p>
                </div>
                <div className="pt-4 p-2 pb-2 flex flex-row text-main-red items-center">
                    <Link href="https://www.facebook.com/dudocutz" target='_blank'>TOVÁBB</Link> <GoChevronRight />
                </div>
            </div>
            <div className="hover:scale-105 transition transform max-w-sm rounded overflow-hidden shadow-lg border-gray-600 border">
                <Image className="w-full" src="/instagram.webp" width={500} height={300} alt="Sunset in the mountains" />
                <div className="py-4 p-2">
                    <div className="font-bold text-xl mb-2 text-white">INSTAGRAM</div>
                    <p className="text-gray-300 text-base">
                    Csatlakozz hozzánk Instagramon, és oszd meg velünk a legkedvesebb pillanataidat, legújabb stílusaidat és inspirációidat!
                    </p>
                </div>
                <div className="pt-4 p-2 pb-2 flex flex-row text-main-red items-center">
                    <Link href="https://www.instagram.com/dudocutz" target='_blank'>TOVÁBB</Link> <GoChevronRight />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Social