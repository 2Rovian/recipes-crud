import React from 'react'
import donut from '../../assets/donut.png'

function GlazedDonut() {
  return (
    <div>
      <main className='container mx-auto max-w-[700px] '>
        <div className='mx-5'>
          <h1 className='text-3xl bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-700 lg:text-4xl py-5 text-center font-bold'>Recipe Details</h1>

          <div className='flex flex-col bg-slate-100 rounded-lg px-3 py-1 shadow mb-5'>
            <div className='grid grid-cols-2 min-h-[250px]'>
              <div className='h-full flex flex-col p-2'>
                <div className='text-center py-2 text-red-900 '>
                  <span className='font-bold text-xl'>Glazed Donut</span>
                </div>

                <img className='img-recipes' alt='URL Image'
                  src={donut}
                />
              </div>

              <div className='flex flex-col p-2'>
                <h2 className='text-center py-2 text-red-950 font-semibold text-xl'>Instructions</h2>

                <div className='grow p-2 border-red-950 border-2 rounded-l-lg rounded-br-none overflow-y-auto h-40'>
                  <ul className='flex flex-col gap-y-2 list-decimal list-inside marker:font-semibold'>
                    <li>
                      <span className='font-semibold'>Prepare the Dough:</span> Mix flour, sugar, yeast, milk, and eggs to form a dough.
                    </li>
                    <li>
                      <span className="font-semibold">Knead the Dough:</span> Knead until smooth, then let it rise for 1-2 hours until doubled in size.
                    </li>
                    <li>
                      <span className="font-semibold">Shape the Donuts:</span> Roll out the dough and cut into donut shapes. Let them rest for 15 minutes.
                    </li>
                    <li>
                      <span className="font-semibold">Fry the Donuts:</span> Heat oil to 350°F (175°C) and fry the donuts until golden brown on both sides.
                    </li>
                    <li>
                      <span className="font-semibold">Glaze the Donuts:</span> Dip the fried donuts into a sugar glaze while still warm.
                    </li>
                    <li>
                      <span className="font-semibold">Serve:</span> Let the donuts cool slightly and enjoy!
                    </li>
                  </ul>

                </div>

                <div className='flex gap-x-2 justify-center items-center text-lg'>
                  <span className='text-center  py-1 font-medium'>Cooking Time:</span>
                  <span className='w-[35px] overflow-hidden text-red-700'>15m</span>
                </div>
              </div>
            </div>

            <div className='flex min-h-[250px] '>
              <div className='grow flex flex-col p-2'>
                <h2 className='text-center py-2 text-red-950 font-semibold text-xl'>Ingredients</h2>
                <div className='grow p-2 border-red-950 border-2 rounded-l-lg rounded-br-none overflow-y-auto h-40'>
                  <ul className='flex flex-col gap-y-2 list-disc list-inside marker:font-semibold'>
                    <li>
                      <span className="font-semibold">Flour</span> - 2 cups
                    </li>

                    <li>
                      <span className="font-semibold">Sugar</span> - 1/2 cup
                    </li>

                    <li>
                      <span className="font-semibold">Yeast</span> - 1 packet (or 2 1/4 tsp)
                    </li>

                    <li>
                      <span className="font-semibold">Milk</span> - 1/2 cup (warm)
                    </li>

                    <li>
                      <span className="font-semibold">Eggs</span> - 2 large eggs
                    </li>

                    <li>
                      <span className="font-semibold">Butter</span> - 1/4 cup (softened)
                    </li>

                    <li>
                      <span className="font-semibold">Vanilla extract</span> - 1 tsp
                    </li>

                    <li>
                      <span className="font-semibold">Sugar (for glaze)</span> - 1 cup
                    </li>

                    <li>
                      <span className="font-semibold">Milk (for glaze)</span> - 2 tbsp
                    </li>

                    <li>
                      <span className="font-semibold">Oil</span> - for frying
                    </li>

                    <li>
                      <span className="font-semibold">Strawberries</span> - 1/2 cup (chopped, optional for topping)
                    </li>
                  </ul>
                </div>
              </div>

              <div className='grow max-w-1/2 flex flex-col p-2'>
                <h2 className='text-center py-2 text-red-950 font-semibold text-xl'>Description</h2>
                <div className='grow p-2 border-red-950 border-2 rounded-l-lg rounded-br-none overflow-y-auto h-40'>
                  <p>Glazed Donuts are soft, fluffy, and sweet treats covered in a smooth, sugary glaze. With a light texture and rich flavor, they’re perfect for breakfast or as a delightful snack. A classic indulgence that’s sure to satisfy any sweet tooth!</p>
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

export default GlazedDonut