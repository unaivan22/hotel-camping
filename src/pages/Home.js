import React from 'react'
import {Link} from 'react-router-dom'


export default function Home() {
  return (
    <div className=" mx-auto px-12 ">
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
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full w-fit">Button</button>
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full w-fit">Button</button>
                    </div>
                </div>
            </div>
        </section>

        <section className='xl:mx-12 lg:mx-12 md:mx-8 sm:mx-2 xs:mx-2 mt-12'>
            <h1 className='text-3xl'>Explore our cabins</h1>
        </section>
    </div>
  )
}