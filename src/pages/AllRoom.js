import React from 'react'
import {Link} from 'react-router-dom'

import Rooms from './data/Rooms'
import Footer from './misc/Footer'


export default function AllRoom() {
  return (
    <div className=" mx-auto xl:px-12 lg:px-12 md:px-4 sm:px-2 xs:px-2 ">
        <section className="rounded-3xl rounded-t-none bg-bgroom xl:mx-12 lg:mx-12 md:mx-8 sm:mx-2 xs:mx-2 bg-no-repeat bg-cover bg-center h-full mix-blend-darken">
            <div class="grid place-items-center h-full text-white">
                <div className='grid grid-cols-1 xl:px-32 lg:px-32 md:px-24 sm:px-6 xs:px-6 text-center mt-16'>
                    <p className='xl:text-6xl lg:text-5xl md:text-3xl sm:text-4xl xs:text-4xl xl:px-32 lg:px-24 md:px-12 xs:px-0 sm:px-0 font-black leading-tight'>
                        Rooms
                    </p>
                    <p className='xl:text-xl lg:text-xl md:text-3xl sm:text-lg text-lg xl:px-32 lg:px-24 md:px-12 xs:px-6 sm:px-6'>
                        The amazing place to relax, enjoy meditation training to praise mental health and wellness, also yoga that promote physical health
                    </p>
                    <div className='flex items-center justify-center gap-x-6 mt-12'>
                          <Link to="/" className="hover:bg-rose-700 text-white font-bold py-6 px-8 rounded-full w-fit text-lg bg-rose-600">Back to Home </Link>
                    </div>
                </div>
            </div>
        </section>

        <section className='xl:mx-12 lg:mx-12 md:mx-8 sm:mx-2 xs:mx-2 mt-28'>

            <Rooms />
        </section>
        <Footer />
    </div>
  )
}