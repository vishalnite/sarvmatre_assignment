import React from 'react';

const Overview = () => {
    return (
        <div className='m-8 text-center px-32'>
            <h1 className='my-16 text-primary text-3xl font-bold tracking-wide'>
                COMPANY OVERVIEW
            </h1>
            <p className='font-bold mb-32'>
                Tempor mollit cupidatat enim magna ea eiusmod ea sint officia ea ea aliqua velit. Sunt aliqua quis elit ullamco culpa mollit incididunt 
                anim fugiat velit. Pariatur nostrud laborum culpa non enim in commodo aliquip. Esse minim incididunt nulla dolore. Aute exercitation 
                fugiat sit eiusmod magna eu. 
            </p>

            <div className='grid grid-cols-1 gap-4 m-16 lg:grid-cols-2'>

                <div className="lg:m-auto">
                    <h1 className='text-primary text-left text-4xl font-bold p-2'>Featured Events</h1>
                    <div className="p-8 text-left max-w-sm rounded-lg overflow-hidden shadow-xl">
                        <div className="m-2 font-bold text-lg mb-2">07/07/2023</div>
                        <p className="m-2 text-gray-700 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia.
                        </p>
                        <div className="m-2 font-bold text-lg mb-2">23/07/2023</div>
                        <p className="m-2 text-gray-700 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia.
                        </p>
                        <button className='my-4 p-2 px-4 rounded-full border-2 border-primary bg-primary text-white text-lg'>
                            Explore More...
                        </button>
                    </div>
                </div>

                <div className="lg:m-auto">
                    <h1 className='text-primary text-left text-4xl font-bold p-2'>Latest News</h1>
                    <div className="p-8 text-left max-w-sm rounded-lg overflow-hidden shadow-xl">
                        <div className="m-2 mb-8 font-bold text-lg">Ullamco Lorem sit mollit sit tempor est ut aliqua quis eu tempor minim esse.</div>
                        <p className="m-2 text-gray-700 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia.
                        </p>
                        <button className='my-4 p-2 px-4 rounded-full border-2 border-primary bg-primary text-white text-lg'>
                            Explore More...
                        </button>
                    </div>
                </div>

                <div className="my-16 lg:col-span-2 m-auto">
                    <div className="p-8 text-center w-[85%] m-auto rounded-lg overflow-hidden shadow-xl">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="m-auto w-32 h-32 border-4 border-primary rounded-full p-3">
                            <path 
                            fillRule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.54 15h6.42l.5 1.5H8.29l.5-1.5zm8.085-8.995a.75.75 0 10-.75-1.299 12.81 12.81 0 00-3.558 3.05L11.03 8.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 001.146-.102 11.312 11.312 0 013.612-3.321z" clipRule="evenodd" />
                        </svg>

                        <div className="m-2 font-bold text-4xl text-primary mb-2">Current Investor</div>
                        <p className="m-2 text-gray-700 text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia.
                        </p>
                    </div>
                </div>

            </div> 
        </div>
    );
}

export default Overview;