import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div className="container mx-auto md:px-4 max-w-full">
            <section className="mb-32 text-center lg:text-left">
                <div className="px-6 py-12 md:px-12">
                    <div className="grid items-center lg:grid-cols-3 lg:gap-x-12">
                        
                        <div className="lg:mt-[75%] lg:ml-[10%] flex flex-col">
                            <h1 className='p-3 text-3xl lg:text-primary font-bold tracking-wide text-black'>
                                INVESTOR RELATIONS
                            </h1>
                            <h3 className='p-3 font-bold text-xl'>
                                Join Us
                            </h3>
                            <div className='formhero text-lg'>
                                <input 
                                    className='inputemail'
                                    type='email' 
                                    placeholder="Get Your company's deck"
                                ></input>
                                <button 
                                    className='btn'>
                                        Join
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;