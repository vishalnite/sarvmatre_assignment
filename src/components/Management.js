import React from 'react';
import m1 from '../Assets/m1.jpg';
import m2 from '../Assets/m2.jpg';
import m3 from '../Assets/m3.jpg';

const Management = () => {
    return (
        <div className='text-center'>
            <h1 className='my-12 text-primary text-3xl font-bold tracking-wide'>
                OUR MANAGEMENT
            </h1>

            <div className="mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <img
                        alt="management"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={m1} />
                    </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <img
                        alt="management"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={m2} />
                    </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <img
                        alt="management"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={m3} />
                    </div>
                    </div>
                </div>
            </div>

            <p className='font-bold mb-32 mt-4'>
                Learn how SIPL is positioned for longer term sustainable growth 
            </p>

            <div className='m-auto w-[50%] h-[50%]'>
                <h1 className='my-16 text-primary text-3xl font-bold tracking-wide'>
                    We Are Adding Value To The Investment
                </h1>
                <div className="aspect-w-16 aspect-h-9">
                    <iframe className='rounded-2xl' title='Testimonial' src="https://www.youtube.com/embed/Cc0VVWbhGNs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
}

export default Management;