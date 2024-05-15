import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section id='Rolam' className='max-container padding-container py-20'>
        <div className='flex flex-col xl:flex-row gap-10 xl:gap-20 justify-center'>
            <div className='flex xl:block justify-center'>
                <Image src="/barbershop.webp" width={500} height={500} alt='Barber Shop'/>
            </div>
            <div className='text-white flex gap-5 flex-col xl:w-1/3 text-center xl:text-start px-0 xl:px-10'>
                <p className='text-3xl font-semibold'>Kreativitás és stílus egyesítése egyetlen vágás alatt.</p>
                <p className='text-m'>Minden hajvágás, minden borotválkozás és minden élmény, amit velünk töltöttél, nem csak szoxláltatások, hanem közös utazás szakaszai a magabiztosság és boldogság felé. Büszkék vagyunk, hogy részesei lehetünk szépségtörténetednek, és izgatottan várjuk, hogy együtt még egy évtizednyi mosolyt és elégedettséget építsünk.</p>
                <div className='flex-row flex gap-10 pt-5 justify-center xl:justify-start'>
                    <div className='flex flex-col gap-10'>
                        <div>
                            <div><p className='text-main-red text-3xl pb-2'>3</p><p className='text-xs md:text-base'>ÉV TAPASZTALAT</p></div>
                        </div>
                        <div>
                            <div><p className='text-main-red text-3xl pb-2'>2080</p><p className='text-xs md:text-base'>ELÉGEDETT VENDÉG</p></div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div>
                            <div><p className='text-main-red text-3xl pb-2'>105</p><p className='text-xs md:text-base'>ELÉGEDETT APA ÉS FIA</p></div>
                        </div>
                        <div>
                            <div><p className='text-main-red text-3xl pb-2'>6240 cm</p><p className='text-xs md:text-base'>LEVÁGOTT HAJSZÁL</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col xl:flex-row gap-10 xl:gap-20 justify-center py-10 md:py-20'>
            <div className='flex xl:hidden justify-center'>
                <Image src="/owner.webp" width={500} height={500} alt='Owner'/>
            </div>
            <div className='text-white flex gap-5 flex-col xl:w-1/3 text-center xl:text-start px-0 xl:px-10'>
                <div><p className='text-main-red text-3xl pb-2'>MIÉRT ÉN?</p><p className='text-sm'>Örömmel üdvözöllek a személyes fodrászati utazásomon, amely több mint egy éve kezdődött el a saját szalonomban.</p></div>
                <div><p className='text-main-red text-3xl pb-2'>SZALON</p><p className='text-sm'>Szalonunkat a legmodernebb eszközökkel és legfrissebb trendekkel felszereltük, hogy garantáltan elégedetten távozzatok. Mindig figyelünk az ügyfeleink igényeire, és egyedi megoldásokat kínálunk minden hajtípushoz és stílushoz.</p></div>
                <div><p className='text-main-red text-3xl pb-2'>RÓLAM</p><p className='text-sm'>A haj és a stílus mindig is a szenvedélyem volt, és büszkén vállalom a fodrászat mesterségét. Hiszem, hogy a frizura nem csupán egy külső megjelenés kérdése, hanem az önbizalom és az egyediség kifejezése is. Szakértő és kreatív szemlélettel közelítem meg minden vendégemet, hogy segítsek nekik megtalálni a saját egyéniségüket és stílusukat.</p></div>
            </div>
            <div className='hidden xl:block justify-center'>
                <Image src="/owner.webp" width={500} height={500} alt='Owner'/>
            </div>
        </div>
    </section>
  )
}

export default About