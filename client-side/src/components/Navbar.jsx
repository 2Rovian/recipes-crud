import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='h-[70px] bg-red-900 text-white'>
            <ul className='flex justify-evenly h-full items-center container mx-auto text-lg md:text-2xl'>

                <Link to='/' className='rounded-full'>
                    <li  className='hover:bg-orange-300 hover:text-slate-950 rounded-full  ease-in-out duration-500 cursor-pointer px-2 py-1'>
                        Home
                    </li>
                </Link>

                <Link to='/' className='rounded-full'>
                    <li className='hover:bg-orange-300 hover:text-slate-950 rounded-full px-2 py-1 ease-in-out duration-500 cursor-pointer'>
                        Create Recipe
                    </li>
                </Link>

                <Link to='/' className='rounded-full'>
                    <li className='hover:bg-orange-300 hover:text-slate-950 rounded-full px-2 py-1 ease-in-out duration-500 cursor-pointer'>
                        Saved Recipes
                    </li>
                </Link>

                <Link to='/login' className='rounded-full'>
                    <li className='hover:bg-orange-300 hover:text-slate-950 rounded-full px-2 py-1 ease-in-out duration-500 cursor-pointer'>
                        Login/Register
                    </li>
                </Link>
                
            </ul>

        </div>
    )
}

export default Navbar