import React from 'react'
import {Link} from 'react-router-dom'

import MainRoom from './data/MainRoom'
import Footer from './misc/Footer'


export default function Home() {
  return (
    <div className=" mx-auto xl:px-12 lg:px-12 md:px-4 sm:px-2 xs:px-2 ">
        <header>
            <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 xl:mx-12 lg:mx-12 md:mx-8 sm:mx-2 xs:mx-2 mt-4 mb-8 shadow-lg rounded-xl">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="https://flowbite.com" class="flex items-center">
                        <img src="media/logo.svg" class="mr-3 h-6 sm:h-9" alt="logo" />
                        <span class="self-center text-xl font-semibold whitespace-nowrap">CabinHotel</span>
                    </a>
                    <div class="flex items-center lg:order-2">
                        <a href="#" class="text-gray-800 hover:bg-gray-50 bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ">Log in</a>
                        <a href="#" class="text-white bg-rose-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Sign Up</a>
                        <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0" aria-current="page">Home</a>
                            </li>
                            <li>
                                <Link class="block py-2 pr-4 pl-3 text-gray-400 hover:text-gray-900 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">About Us</Link>
                            </li>
                            <li>
                                <Link class="block py-2 pr-4 pl-3 text-gray-400 hover:text-gray-900 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Career</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        <section className="rounded-3xl bg-bghero xl:mx-12 lg:mx-12 md:mx-8 sm:mx-2 xs:mx-2 bg-no-repeat bg-cover bg-center h-full mix-blend-darken">
            <div class="grid place-items-center h-full text-white">
                <div className='grid grid-cols-1 xl:px-32 lg:px-32 md:px-24 sm:px-6 xs:px-6 text-center mt-16'>
                    <p className='xl:text-6xl lg:text-5xl md:text-3xl sm:text-4xl xs:text-4xl xl:px-32 lg:px-24 md:px-12 xs:px-0 sm:px-0 font-black leading-tight'>
                        Recharge mental health in unique hotel
                    </p>
                    <p className='xl:text-xl lg:text-xl md:text-3xl sm:text-lg text-lg xl:px-32 lg:px-24 md:px-12 xs:px-6 sm:px-6'>
                        The amazing place to relax, enjoy meditation training to praise mental health and wellness, also yoga that promote physical health
                    </p>
                    <div className='flex items-center justify-center gap-x-6 mt-12'>
                          <Link to='all-room' className="hover:bg-rose-700 text-white font-bold py-6 px-8 rounded-full w-fit text-lg bg-rose-600">Explore Room</Link>
                          <button className="bg-white hover:bg-white text-black font-bold py-6 px-8 rounded-full text-lg w-fit">About Us</button>
                    </div>
                </div>
            </div>
        </section>

        <section className='xl:mx-12 lg:mx-12 md:mx-8 sm:mx-2 xs:mx-2 mt-32'>
            <div className='flex items-center justify-between mb-12 gap-x-12'>
                <h1 className='text-4xl font-bold'>Explore our popular cabins</h1>
                <Link to='/all-room' className="hover:bg-rose-900 text-white font-bold py-4 px-8 rounded-full xl:w-fit lg:w-fit md:w-fit sm:w-44 xs:w-44 bg-rose-600">View All</Link>
            </div>

            <MainRoom />
        </section>


        <section className='xl:mx-12 lg:mx-12 md:mx-8 sm:mx-2 xs:mx-2 mt-36'>
            <div className='text-center mb-24'>
                <h1 className='text-4xl font-bold'>Enjoy the facilities we provide for free</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className='grid grid-cols-4 gap-x-12'>
                <div className='text-center'>
                    <img className='w-42 mb-4 mx-auto h-36' src='media/outdoorpicnic.svg' />
                    <p className='font-bold text-xl'>Outdoor Picnic</p>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className='text-center'>
                    <img className='w-42 mb-4 mx-auto h-36' src='media/woodfire.svg' />
                    <p className='font-bold text-xl'>Wood Fire</p>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className='text-center'>
                    <img className='w-42 mb-4 mx-auto h-36' src='media/gameroom.svg' />
                    <p className='font-bold text-xl'>Game Room</p>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className='text-center'>
                    <img className='w-42 mb-4 mx-auto h-36' src='media/paddling.svg' />
                    <p className='font-bold text-xl'>Lake Paddling</p>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </section>

        <Footer />
    </div>
  )
}