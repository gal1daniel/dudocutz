import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <section className='max-container padding-container py-20'>
        <div className='mb-10 relative flex flex-col items-center justify-center' style={{ height: '40vh' }}>
            <div className='absolute top-0 left-0 w-full h-full z-[-1]'>
                <Image src="/hero_banner.webp" alt='barbershop' fill={true} style={{ objectFit: 'cover' }} />
            </div>
            <div className='text-white padding-container max-container gap-5 flex items-center justify-center flex-col text-center'>
                <Image src="/dudo-circle-white copy.webp" width={200} height={200} alt='logo'/>
                <p className='text-3xl md:text-4xl font-semibold'>Galéria</p>
            </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
                <div>
                    <Image width={500} height={500} className="h-auto max-w-full rounded-lg hover:scale-105 transition transform" src="/1.webp" alt="Image 0" />
                </div>
                <div>
                    <Image width={500} height={500} className="h-auto max-w-full rounded-lg hover:scale-105 transition transform" src="/2.webp"alt="Image 1" />
                </div>
                <div>
                    <Image width={500} height={500} className="h-auto max-w-full rounded-lg hover:scale-105 transition transform" src="/3.webp" alt="Image 2" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image width={500} height={500} className="h-auto max-w-full rounded-lg hover:scale-105 transition transform" src="/4.webp" alt="Image 3" />
                </div>
                <div>
                    <Image width={500} height={500} className="h-auto max-w-full rounded-lg hover:scale-105 transition transform" src="/5.webp" alt="Image 4" />
                </div>
                <div>
                    <Image width={500} height={500} className="h-auto max-w-full rounded-lg hover:scale-105 transition transform" src="/6.webp" alt="Image 5" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image width={500} height={500} className="h-auto max-w-full rounded-lg hover:scale-105 transition transform" src="/7.webp" alt="Image 6" />
                </div>
                <div>
                    <Image width={500} height={500} className="h-auto max-w-full rounded-lg hover:scale-105 transition transform" src="/8.webp" alt="Image 7" />
                </div>
                <div>
                    <Image width={500} height={500} className="h-auto max-w-full rounded-lg hover:scale-105 transition transform" src="/9.webp" alt="Image 8" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image width={500} height={500} className="h-auto max-w-full rounded-lg hover:scale-105 transition transform"  src="/10.webp" alt="Image 9" />
                </div>
                <div>
                    <Image width={500} height={500} className="h-auto max-w-full rounded-lg hover:scale-105 transition transform"  src="/11.webp" alt="Image 10" />
                </div>
                <div>
                    <Image width={500} height={500} className="h-auto max-w-full rounded-lg hover:scale-105 transition transform"  src="/12.webp" alt="Image 11" />
                </div>
            </div>
        </div> 
    </section>
  );
};

export default Page;
