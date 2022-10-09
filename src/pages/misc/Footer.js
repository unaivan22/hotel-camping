import React from 'react'

export default function Footer() {
  return (
    <div className=" mx-auto xl:px-12 lg:px-12 md:px-4 sm:px-2 xs:px-2 mt-24 py-24 border-t border-gray-200 mt-56">
      <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-y-8'>
        <div>
            <div className='flex items-center'>
              <img src='media/logo.svg' className='h-12' />
              <p className='font-bold text-2xl'>CabinHotel</p>
            </div>
            <p>Lorem ipsum dolor sit amet consect adipiscing elit phasellus amet.</p>
        </div>
        <div className='grid grid-cols-1'>
            <h1 className='font-bold text-2xl mb-4 text-black'>Pages</h1>
            <div className='gap-y-4'>
                <p>Home</p>
                <p>Career</p>
            </div>
        </div>
        <div className='grid grid-cols-1'>
            <h1 className='font-bold text-2xl mb-4 text-black'>Pages</h1>
            <div className='gap-y-4'>
                <p>Home</p>
                <p>Career</p>
            </div>
        </div>
      </div>
    </div>
  )
}
