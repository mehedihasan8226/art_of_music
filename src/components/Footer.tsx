import { footer } from 'motion/react-client'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-gray-400 py-12'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'> 
            <div>
                <h2 className='text-xl text-white mb-3'>About Us</h2>
                <p>
                    Music is the arrangement of sound to 
                    create some combination of form, harmony, melody, 
                    rhythm, or otherwise expressive content. Music is generally agreed to be a cultural 
                    universal that is present in all human societies. 
                </p>

            </div>

            <div>
                <h2 className='text-xl text-white mb-3'>Quick Links</h2>
                <ul>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link href={'/courses'}>Courses</Link>
                    </li>
                    <li>
                        <Link href={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </div>

            <div>
                <h2 className='text-xl text-white mb-3'>Follow Us</h2>
                <a className='mr-3' href="#">Facebook</a>
                <a className='mr-3' href="#">Instagram</a>
                <a className='mr-3' href="#">Twiter</a>
            </div>
            <div>
                <h2 className='text-xl text-white mb-3'>Contact Us</h2>
                <p>Khulna, Bangladesh</p>
                <p>Jessore 4700</p>
                <p>Email: info@musicschool.com</p>
                <p>Phone: (880) 1717-579233</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer