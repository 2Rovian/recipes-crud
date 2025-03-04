import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './authContext';

function Navbar() {

    const { isAuthenticated, setIsAuthenticated } = useAuth();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove o token
        setIsAuthenticated(false); // Atualiza o estado de autenticação
    };

    const [showMenuDropdown, setShowMenuDropdown] = useState(false);

    return (
        <div className='h-[70px] bg-red-900 text-white font-medium'>
            <ul className='flex justify-evenly h-full items-center container mx-auto text-lg md:text-2xl'>

                <Link to='/' className='rounded-full'>
                    <li className='hover:bg-orange-300 hover:text-slate-950 rounded-full  ease-in-out duration-500 cursor-pointer px-2 py-1'>
                        Home
                    </li>
                </Link>

                <Link to='/create-recipe' className='rounded-full'>
                    <li className='hover:bg-orange-300 hover:text-slate-950 rounded-full px-2 py-1 ease-in-out duration-500 cursor-pointer'>
                        Create Recipe
                    </li>
                </Link>

                <Link to='/saved-recipes' className='rounded-full'>
                    <li className='hover:bg-orange-300 hover:text-slate-950 rounded-full px-2 py-1 ease-in-out duration-500 cursor-pointer'>
                        Saved Recipes
                    </li>
                </Link>

                {isAuthenticated ?
                    (<div className='relative'>
                        <i className="fa-solid fa-user p-2 cursor-pointer hover:scale-125 duration-500 ease-in-out "
                            onClick={() => { setShowMenuDropdown(!showMenuDropdown) }}
                        ></i>

                        {showMenuDropdown && <div className='absolute left-1/2 -translate-x-1/2 bg-slate-100 shadow text-slate-900 flex flex-col rounded-lg py-2 gap-y-4'>

                            <Link to='/profile' className='text-center hover:text-red-900 hover:scale-105 duration-500 ease-in-out cursor-pointer'>
                                <span className='font-semibold '>Profile</span>
                            </Link>
                            <span className='px-2 py-1 font-semibold cursor-pointer hover:underline'
                                onClick={handleLogout}
                            >Logout</span>
                        </div>}

                    </div>)
                    :

                    (<Link to='/login' className='rounded-full'>
                        <li className='hover:bg-orange-300 hover:text-slate-950 rounded-full px-2 py-1 ease-in-out duration-500 cursor-pointer'
                            onClick={(e) => e.stopPropagation()}
                        >
                            Login/Register
                        </li>
                    </Link>)}



            </ul>

        </div>
    )
}

export default Navbar