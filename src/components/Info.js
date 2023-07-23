import React from 'react';

const Info = () => {
    return (
        <div className='text-center'>
            <div className='grid grid-cols-1 gap-4 m-16 lg:grid-cols-2'>
                
                <div className="lg:m-auto">
                    <div className="p-8 text-left w-full rounded-lg overflow-hidden shadow-xl text-center">
                        <h1 className='text-primary text-4xl font-semibold tracking-wide mb-4'>Company Related Info</h1>
                        <div className='flex flex-row justify-between'>   
                            <div className='p-8'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2EA990" className="m-auto w-20 h-20 p-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h1 className='p-2 text-2xl font-semibold'>Our History</h1>
                            </div>
                            <div className='p-8'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2EA990" className="w-20 h-20 m-auto p-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                                </svg>
                                <h1 className='p-2 text-2xl font-semibold'>Business Presentation</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:m-auto">
                    <div className="p-8 text-left w-full rounded-lg overflow-hidden shadow-xl text-center">
                        <h1 className='text-primary text-4xl font-semibold tracking-wide mb-4'>We Are In News</h1>
                        <div className='flex flex-row justify-between'>   
                            <div className='p-8'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2EA990" className="w-20 h-20 m-auto p-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                </svg>
                                <h1 className='p-2 text-2xl font-semibold'>Media Coverage</h1>
                            </div>
                            <div className='p-8'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2EA990" className="w-20 h-20 m-auto p-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                                </svg>
                                <h1 className='p-2 text-2xl font-semibold'>Press Release</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Info;