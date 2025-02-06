import React from 'react'
import bolo from '../../assets/bolo.jpg'

function ChocolateCake() {
  return (
    <div>
      <main className='container mx-auto max-w-[700px] '>
        <div className='mx-5'>
          <h1 className='text-3xl bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-700 lg:text-4xl py-5 text-center font-bold'>Recipe Details</h1>

          <div className='flex flex-col bg-slate-100 rounded-lg px-3 py-1 shadow mb-5'>
            <div className='grid grid-cols-2 min-h-[250px]'>
              <div className='h-full flex flex-col p-2'>
                <div className='text-center py-2 text-red-900 '>
                  <span className='font-bold text-xl'>Chocolate Cake</span>
                </div>

                <img className='img-recipes' alt='URL Image'
                  src={bolo}
                />
              </div>

              <div className='flex flex-col p-2'>
                <h2 className='text-center py-2 text-red-950 font-semibold text-xl'>Instructions</h2>

                <div className='grow p-2 border-red-950 border-2 rounded-l-lg rounded-br-none overflow-y-auto h-40'>
                  <ul className='flex flex-col gap-y-2 list-decimal list-inside marker:font-semibold'>
                    <li>
                      <span className='font-semibold'>Prepare the Batter:</span> Mix flour, cocoa powder, sugar, baking powder, eggs, milk, and butter until smooth.
                    </li>
                    <li>
                      <span className="font-semibold">Preheat the Oven:</span> Preheat the oven to 350°F (175°C).
                    </li>
                    <li>
                      <span className="font-semibold">Pour into Pans:</span> Divide the batter evenly into greased cake pans.
                    </li>
                    <li>
                      <span className="font-semibold">Bake the Cake:</span> Bake for 25-30 minutes or until a toothpick comes out clean.
                    </li>
                    <li>
                      <span className="font-semibold">Cool the Cake:</span> Let the cake cool in the pans for 10 minutes, then transfer to a wire rack to cool completely.
                    </li>
                    <li>
                      <span className="font-semibold">Frost the Cake:</span> Spread chocolate frosting between layers and on top of the cake.
                    </li>
                    <li>
                      <span className="font-semibold">Serve:</span> Slice and enjoy your delicious chocolate cake!
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
                      <span className="font-semibold">Cocoa powder</span> - 1/2 cup
                    </li>

                    <li>
                      <span className="font-semibold">Sugar</span> - 1 1/2 cups
                    </li>

                    <li>
                      <span className="font-semibold">Baking powder</span> - 1 1/2 tsp
                    </li>

                    <li>
                      <span className="font-semibold">Eggs</span> - 2 large eggs
                    </li>

                    <li>
                      <span className="font-semibold">Milk</span> - 1 cup
                    </li>

                    <li>
                      <span className="font-semibold">Butter</span> - 1/2 cup (softened)
                    </li>

                    <li>
                      <span className="font-semibold">Vanilla extract</span> - 1 tsp
                    </li>

                    <li>
                      <span className="font-semibold">Boiling water</span> - 1 cup
                    </li>

                    <li>
                      <span className="font-semibold">Chocolate frosting</span> - for topping
                    </li>
                  </ul>

                </div>
              </div>

              <div className='grow max-w-1/2 flex flex-col p-2'>
                <h2 className='text-center py-2 text-red-950 font-semibold text-xl'>Description</h2>
                <div className='grow p-2 border-red-950 border-2 rounded-l-lg rounded-br-none overflow-y-auto h-40'>
                  <p>Chocolate Cake is a rich, moist, and decadent dessert made with layers of smooth, velvety chocolate. Topped with creamy chocolate frosting, it offers a perfect balance of sweetness and cocoa flavor. A timeless treat that’s ideal for celebrations or as a satisfying indulgence for any chocolate lover!
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

export default ChocolateCake