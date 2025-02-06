import React from 'react'
import steak from '../../assets/meet.png'

function GrilledSteak() {
  return (
    <div>
      <main className='container mx-auto max-w-[700px] '>
        <div className='mx-5'>
          <h1 className='text-3xl bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-700 lg:text-4xl py-5 text-center font-bold'>Recipe Details</h1>

          <div className='flex flex-col bg-slate-100 rounded-lg px-3 py-1 shadow mb-5'>
            <div className='grid grid-cols-2 min-h-[250px]'>
              <div className='h-full flex flex-col p-2'>
                <div className='text-center py-2 text-red-900 '>
                  <span className='font-bold text-xl'>Grilled Steak</span>
                </div>

                <img className='img-recipes' alt='URL Image'
                  src={steak}
                />
              </div>

              <div className='flex flex-col p-2'>
                <h2 className='text-center py-2 text-red-950 font-semibold text-xl'>Instructions</h2>

                <div className='grow p-2 border-red-950 border-2 rounded-l-lg rounded-br-none overflow-y-auto h-40'>
                  <ul className='flex flex-col gap-y-2 list-decimal list-inside marker:font-semibold'>
                    <li>
                      <span className='font-semibold'>Prepare the Steak:</span> Season the steak with salt, pepper, and your preferred spices.
                    </li>
                    <li>
                      <span className="font-semibold">Preheat the Grill:</span> Heat your grill to medium-high heat.
                    </li>
                    <li>
                      <span className="font-semibold">Grill the Steak:</span> Cook the steak on the grill for 4-5 minutes on each side (adjust based on thickness and doneness preference).
                    </li>
                    <li>
                      <span className="font-semibold">Rest the Steak:</span> Let the steak rest for 5 minutes before serving.
                    </li>
                    <li>
                      <span className="font-semibold">Serve:</span> Slice the steak and serve with your favorite sides. Enjoy!
                    </li>
                  </ul>


                </div>

                <div className='flex gap-x-2 justify-center items-center text-lg'>
                  <span className='text-center  py-1 font-medium'>Cooking Time:</span>
                  <span className='w-[35px] overflow-hidden text-red-700'>20m</span>
                </div>
              </div>
            </div>

            <div className='flex min-h-[250px] '>
              <div className='grow flex flex-col p-2'>
                <h2 className='text-center py-2 text-red-950 font-semibold text-xl'>Ingredients</h2>
                <div className='grow p-2 border-red-950 border-2 rounded-l-lg rounded-br-none overflow-y-auto h-40'>
                  <ul className='flex flex-col gap-y-2 list-disc list-inside marker:font-semibold'>
                    <li>
                      <span className="font-semibold">Steak</span> - 1 (around 200-300g)
                    </li>

                    <li>
                      <span className="font-semibold">Salt</span> - to taste
                    </li>

                    <li>
                      <span className="font-semibold">Black pepper</span> - freshly ground, to taste
                    </li>

                    <li>
                      <span className="font-semibold">Garlic (optional)</span> - 2 cloves, minced
                    </li>

                    <li>
                      <span className="font-semibold">Olive oil</span> - for grilling
                    </li>

                    <li>
                      <span className="font-semibold">Butter (optional)</span> - for basting
                    </li>
                  </ul>


                </div>
              </div>

              <div className='grow max-w-1/2 flex flex-col p-2'>
                <h2 className='text-center py-2 text-red-950 font-semibold text-xl'>Description</h2>
                <div className='grow p-2 border-red-950 border-2 rounded-l-lg rounded-br-none overflow-y-auto h-40'>
                  <p>Grilled Steak is a classic, hearty dish made with a tender steak seasoned with salt, pepper, and optional garlic. It's grilled to perfection, offering a juicy, flavorful, and satisfying meal. Perfect for steak lovers, it pairs well with your favorite sides for a complete dining experience.</p>
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

export default GrilledSteak