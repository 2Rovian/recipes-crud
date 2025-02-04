import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div>
            <div className='w-[400px] mx-auto mt-10 text-center flex flex-col bg-slate-950 text-blue-400 shadow-lg rounded-lg px-4'>
                <span className='text-9xl font-semibold py-10'>404</span>
                <p className='text-lg'>The page you are looking for does not exist </p>

                <p className='pb-10 pt-2 text-lg'>Back to
                    <Link to='/' className='hover:bg-orange-300 border-2 border-blue-400 hover:text-slate-950 hover:border-0 hover:font-semibold rounded-full  ease-in-out duration-500 cursor-pointer px-3 py-1 mx-2'>
                        Home
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default ErrorPage