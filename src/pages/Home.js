import React from 'react'
import {Link} from 'react-router-dom'


export default function Home() {
  return (
    <div className=" mx-auto xl:px-12 lg:px-12 md:px-4 sm:px-2 xs:px-2 ">
        <section className="rounded-3xl rounded-t-none bg-bghero xl:mx-12 lg:mx-12 md:mx-8 sm:mx-2 xs:mx-2 bg-no-repeat bg-cover bg-center h-full">
            <div class="grid place-items-center h-full text-white">
                <div className='grid grid-cols-1 xl:px-32 lg:px-32 md:px-24 sm:px-12 xs:px-12 text-center'>
                    <p className='xl:text-5xl lg:text-5xl md:text-3xl sm:text-lg xs:text-4xl'>
                        Recharge energies in our unique hotel
                    </p>
                    <p className='text-lg'>
                        Non consectetur a erat nam at lectus urna duis convallis molestie nunc non blandit massa ut etiam sit amet nisl purus in mollis nunc sed et magnis dis parturient.
                    </p>
                    <div className='flex items-center justify-center gap-x-6 mt-12'>
                          <button className="hover:bg-rose-700 text-white font-bold py-4 px-8 rounded-full w-fit bg-rose-600">Explore Room</button>
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full w-fit">About Us</button>
                    </div>
                </div>
            </div>
        </section>

        <section className='xl:mx-12 lg:mx-12 md:mx-8 sm:mx-2 xs:mx-2 mt-28'>
            {/* <div className='grid grid-cols-2'>
                <h1 className='text-3xl'>Explore our cabins</h1>
                <div className='text-right'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full w-fit">View All</button>
                </div>
            </div> */}
            <div className='flex items-center justify-between mb-12'>
                <h1 className='text-3xl'>Explore our cabins</h1>
                <button className="hover:bg-rose-900 text-white font-bold py-4 px-8 rounded-full w-fit bg-rose-600">View All</button>
            </div>

            <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-6'>
                <div class="rounded-3xl overflow-hidden shadow-lg">
                    <img class="w-full" src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80" alt="Sunset in the mountains" />
                    <div class="px-6 p-4">
                        <div class="font-bold text-2xl mb-2">Single Room</div>
                        <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">2 Guest</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">1 Bed</span>
                    </div>
                    <div className='flex items-center justify-between px-4 pb-4 pt-3 border-t border-zinc-200'>
                        <p className='font-bold text-dark text-2xl'>Rp 150.000<span className='text-base font-light text-zinc-600'> /night</span> </p>
                        <button className="hover:bg-rose-900 text-white font-bold py-4 px-8 rounded-full w-fit bg-rose-600">Book Now</button>
                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}