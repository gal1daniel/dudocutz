import React from 'react'
import { POLICY2 } from '@/constants/reviews'

const page = () => {
  return (
    <section className='max-container padding-container'>ű
        <div className='py-20'> 
            <div className='text-white'>
                <p className='text-4xl'>Felhasználási feltételek</p>
                <p className='text-sm font-light'>Legutóbb módosítva: 2024 április</p>
                <p className='text-sm py-5'>Kérjük, figyelmesen olvassa el ezeket a felhasználási feltételeket, mielőtt bármilyen módon is használná ezt a weboldalt. A weboldalunkhoz való hozzáférés és annak használata feltételezi, hogy Ön elfogadja ezeket a feltételeket. Amennyiben nem ért egyet ezekkel a feltételekkel, kérjük, ne használja ezt a weboldalt.</p>
            </div>
        {POLICY2.map((item) => (
            <Policy 
                key={item.title}
                title={item.title}
                desc={item.desc}
            />
        ))}
        </div>
    </section>
  )
}

export default page

type POLICY2 = {
    title: string;
    desc: string;
};

const Policy: React.FC<POLICY2> = ({ title, desc }) => {

    return (
        <div>
            <div className='text-white'>
                <p className='font-light'><span className='font-semibold'>{title}</span> {desc}</p>
            </div>
        </div>
    );
};