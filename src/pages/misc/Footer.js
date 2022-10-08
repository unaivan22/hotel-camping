import React from 'react'

export default function Footer() {
  return (
    <div className=" mx-auto xl:px-12 lg:px-12 md:px-4 sm:px-2 xs:px-2 mt-24 py-24">
      <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-y-8'>
        <div>
            <img src='https://assets.website-files.com/61f981dc0f719d75a5d78239/61f999c2b37ddfd786d7a255_logo-rental-webflow-ecommerce-website-template.svg' />
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
