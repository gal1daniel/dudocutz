"use client"

import React, { useState } from 'react';

const Services = () => {

    // State to manage which answer is currently displayed
    const [openAnswer, setOpenAnswer] = useState<string | null>(null);

    // Function to handle toggling visibility
    const handleToggle = (answerId: string) => {
        setOpenAnswer((prevOpenAnswer) => {
            return prevOpenAnswer === answerId ? null : answerId;
        });
    };

    return (
        <section id='Szolgaltatasok' className='padding-container max-container pb-20'>
            <div className='text-white flex flex-col justify-center items-center gap-5 text-center'>
                <p className='text-3xl'>SZOLGÁLTATÁSAIM</p>
                <p className='text-sm md:w-1/2'>
                    Fedezd fel professzionális hajvágási szolgáltatásaimat, ahol a legfrissebb trendek és a hagyományos stílusok tökéletes egyensúlyát kínálom.
                </p>
            </div>
            <div className='w-full px-7 md:px-10 xl:px-2 py-4'>
                <div className='mx-auto w-full max-w-5xl'>
                    {/* FAQ items */}
                    {[
                        {   
                            price: "3500 Ft",
                            id: 'service-1',
                            question: 'Hajvágás',
                            answer: 'Változatos vágási stílusok és trendek közül választhatnak vendégeink, hogy egyedülálló stílusban távozhassanak, ami kiemeli egyéniségüket és megfelel az elvárásaiknak.'
                        },
                        {
                            price: "2400 Ft",
                            id: 'service-2',
                            question: 'Szakáll igazítás',
                            answer: 'Felnőtt vendégeink számára kínált szolgáltatásunk biztosítja, hogy szakálluk mindig ápolt és pontos legyen, megfelelő kontúrral és hosszúsággal, így garantálva az ápolt megjelenést.'
                        },
                        {
                            price: "4500 Ft",
                            id: 'service-3',
                            question: 'Hajvágás és Szakáll igazítás',
                            answer: 'Teljes körű ápolást és frissítést biztosítunk vendégeinknek, egy lépésben, hogy hajuk és szakálluk mindig a legjobb formájukban tündököljenek.'
                        },
                        {
                            price: "2900 Ft",
                            id: 'service-4',
                            question: 'Gyerek (14 év alatt)',
                            answer: 'Fiatalabb vendégeinknek szóló szolgáltatásunk során gondoskodunk arról, hogy hajuk mindig ápolt és divatos legyen, miközben barátságos és kényelmes környezetben érezhetik magukat.'
                        },
                        {
                            price: "5500 Ft",
                            id: 'service-5',
                            question: 'Apa - Fia hajvágás',
                            answer: 'Különleges élmény az apáknak és fiúknak, miközben profi fodrászaink gondoskodnak a tökéletes vágásokról mindkettejük számára, erősítve a családi kötelékeket és stílusukat.'
                        }
                    ].map((service) => (
                        <div key={service.id} className='mb-2'>
                            {/* FAQ button with border */}
                            <div className={`border-b ${openAnswer === service.id ? 'border-main-red' : 'border-gray-300 hover:border-main-red'}`}>
                                <button
                                    className={`flex w-full items-center justify-between rounded-lg p-5 text-left text-lg font-bold hover:text-main-red ${openAnswer === service.id ? 'text-main-red' : 'text-white'}`}
                                    onClick={() => handleToggle(service.id)}
                                >
                                    <span className='text-sm md:text-lg'>{service.question}</span>
                                    <div className='text-main-red md:text-base text-sm'>{service.price}</div>
                                </button>
                            </div>
                            {/* Answer appears below the bottom border */}
                            {openAnswer === service.id && (
                                <div className='answer pt-2 pb-5 px-5 text-sm lg:text-base text-white'>
                                    {service.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;