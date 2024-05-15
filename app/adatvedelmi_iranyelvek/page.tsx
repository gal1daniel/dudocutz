import React from 'react'
import { POLICY1 } from '@/constants/reviews'

const page = () => {
  return (
    <section className='max-container padding-container'>ű
        <div className='py-20'> 
            <div className='text-white'>
                <p className='text-4xl'>Adatvédelmi irányelvek</p>
                <p className='text-sm font-light'>Legutóbb módosítva: 2024 április</p>
                <p className='text-sm py-5'>Ez az adatvédelmi irányelv részletezi, hogy milyen adatokat gyűjtünk össze, hogyan használjuk ezeket az adatokat és hogyan védjük meg azokat, amikor Ön használja ezt a weboldalt.</p>
            </div>
        {POLICY1.map((item) => (
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

type POLICY1 = {
    title: string;
    desc: string;
};

const Policy: React.FC<POLICY1> = ({ title, desc }) => {

    return (
        <div>
            <div className='text-white'>
                <p className='font-light'><span className='font-semibold'>{title}</span> {desc}</p>
            </div>
        </div>
    );
};