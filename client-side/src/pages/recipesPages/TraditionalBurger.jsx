import React from 'react'
import hamburguer from '../../assets/hamburguer.jpg'

function TraditionalBurger() {
    return (
        <div>
            <main className='container mx-auto max-w-[700px] '>
                <div className='mx-5'>
                    <h1 className='text-3xl bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-700 lg:text-4xl py-5 text-center font-bold'>Recipe Details</h1>

                    <div className='flex flex-col bg-slate-100 rounded-lg px-3 py-1 shadow mb-5'>
                        <div className='grid grid-cols-2 min-h-[250px]'>
                            <div className='h-full flex flex-col p-2'>
                                <div className='text-center py-2 text-red-900 '>
                                    <span className='font-bold text-xl'>Tradional Burger</span>
                                </div>
                                <img className='img-recipes' alt='URL Image'
                                    src={hamburguer}
                                />
                            </div>

                            <div className='flex flex-col p-2'>
                                <h2 className='text-center py-2 text-red-950 font-semibold text-xl'>Instructions</h2>

                                <div className='grow p-2 border-red-950 border-2 rounded-l-lg rounded-br-none overflow-y-auto h-40'>
                                    <ul className='flex flex-col gap-y-2 list-decimal list-inside marker:font-semibold'>
                                        <li>
                                            <span className='font-semibold'>Prepare the Patties:</span> Season ground beef with salt and pepper. Shape into patties.
                                        </li>
                                        <li>
                                            <span className="font-semibold">Cook the Patties:</span> Grill or fry over medium heat for 3-4 minutes on each side (adjust for preferred doneness).
                                        </li>
                                        <li>
                                            <span className="font-semibold">Toast the Buns:</span> Lightly toast burger buns in a pan or on the grill.

                                        </li>

                                        <li>
                                            <span className="font-semibold">Assemble:</span> Place the patty on the bun, add cheese, lettuce, tomato, onion, and pickles.</li>

                                        <li>
                                            <span className="font-semibold">Add Sauce:</span> Spread ketchup, mustard, or mayo to taste.
                                        </li>

                                        <li>
                                            <span className="font-semibold">Serve:</span> Top with the bun and enjoy your burger while it’s hot!</li>
                                    </ul>
                                </div>

                                <div className='flex gap-x-2 justify-center items-center text-lg'>
                                    <span className='text-center  py-1 font-medium'>Cooking Time:</span>
                                    <span className='w-[35px] overflow-hidden text-red-700'>25m</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex min-h-[250px] '>
                            <div className='grow flex flex-col p-2'>
                                <h2 className='text-center py-2 text-red-950 font-semibold text-xl'>Ingredients</h2>
                                <div className='grow p-2 border-red-950 border-2 rounded-l-lg rounded-br-none overflow-y-auto h-40'>
                                    <ul className='flex flex-col gap-y-2 list-disc list-inside marker:font-semibold'>
                                        <li>
                                            <span className="font-semibold">Ground beef</span> - 125g (for 1 patty)

                                        </li>

                                        <li>
                                            <span className="font-semibold">Hamburger bun</span> - 1 bun
                                        </li>

                                        <li>
                                            <span className="font-semibold">Cheese slice</span> - 1 slice (cheddar is common)
                                        </li>

                                        <li>
                                            <span className="font-semibold">Lettuce</span> - 1-2 leaves.
                                        </li>

                                        <li>
                                            <span className="font-semibold">Tomato</span> - 1-2 slices
                                        </li>

                                        <li>
                                            <span className="font-semibold">Onion</span> - 1 slice (optional)

                                        </li>

                                        <li>
                                            <span className="font-semibold">Pickles</span> - to taste
                                        </li>

                                        <li>
                                            <span className='font-semibold'>Ketchup, mustard, and/or mayo</span> - to taste
                                        </li>

                                        <li>
                                            <span className="font-semibold">Salt & pepper</span> - to season the beef

                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className='grow max-w-1/2 flex flex-col p-2'>
                                <h2 className='text-center py-2 text-red-950 font-semibold text-xl'>Description</h2>
                                <div className='grow p-2 border-red-950 border-2 rounded-l-lg rounded-br-none overflow-y-auto h-40'>
                                    <p>A Traditional Burger is a classic, hearty dish made with a juicy beef patty, melted cheese, fresh lettuce, tomato, and pickles, all sandwiched between a toasted hamburger bun. It's a perfect blend of flavors, creating a satisfying and delicious meal.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <button type='submit' className='py-2 text-white cursor-pointer duration-500 ease-in-out bg-red-900 hover:bg-orange-300 hover:text-red-950 rounded-lg m-2'>Save Recipe</button>
                    </div>

                </div>

            </main>
        </div>
    )
}

export default TraditionalBurger