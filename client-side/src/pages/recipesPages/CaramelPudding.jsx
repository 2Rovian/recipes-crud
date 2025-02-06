import React from 'react'
import pudim from '../../assets/pudim.jpg'

function CaramelPudding() {
  return (
    <div>
      <main className='container mx-auto max-w-[700px] '>
        <div className='mx-5'>
          <h1 className='text-3xl bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-700 lg:text-4xl py-5 text-center font-bold'>Recipe Details</h1>

          <div className='flex flex-col bg-slate-100 rounded-lg px-3 py-1 shadow mb-5'>
            <div className='grid grid-cols-2 min-h-[250px]'>
              <div className='h-full flex flex-col p-2'>
                <div className='text-center py-2 text-red-900 '>
                  <span className='font-bold text-xl'>Caramel Pudding</span>
                </div>

                <img className='img-recipes' alt='URL Image'
                  src={pudim}
                />
              </div>

              <div className='flex flex-col p-2'>
                <h2 className='text-center py-2 text-red-950 font-semibold text-xl'>Instructions</h2>

                <div className='grow p-2 border-red-950 border-2 rounded-l-lg rounded-br-none overflow-y-auto h-40'>
                  <ul className='flex flex-col gap-y-2 list-decimal list-inside marker:font-semibold'>
                    <li>
                      <span className='font-semibold'>Make the Caramel:</span> Melt sugar in a pan until it turns golden brown, then pour into the base of a baking dish.
                    </li>
                    <li>
                      <span className="font-semibold">Prepare the Custard:</span> Whisk together eggs, sugar, milk, and vanilla extract until smooth.
                    </li>
                    <li>
                      <span className="font-semibold">Pour into Dish:</span> Pour the custard mixture over the caramel in the baking dish.
                    </li>
                    <li>
                      <span className="font-semibold">Bake:</span> Place the dish in a water bath and bake at 350°F (175°C) for 40-45 minutes, or until set.
                    </li>
                    <li>
                      <span className="font-semibold">Cool the Pudding:</span> Let the pudding cool to room temperature, then refrigerate for a few hours.
                    </li>
                    <li>
                      <span className="font-semibold">Serve:</span> Invert the pudding onto a plate and enjoy your delicious caramel treat!
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
                      <span className="font-semibold">Sugar</span> - 1 cup (for caramel)
                    </li>
                    <li>
                      <span className="font-semibold">Eggs</span> - 4 large eggs
                    </li>
                    <li>
                      <span className="font-semibold">Sugar</span> - 1/2 cup (for custard)
                    </li>
                    <li>
                      <span className="font-semibold">Milk</span> - 2 cups (whole milk)
                    </li>
                    <li>
                      <span className="font-semibold">Vanilla extract</span> - 1 tsp
                    </li>
                    <li>
                      <span className="font-semibold">Water</span> - for water bath
                    </li>
                  </ul>


                </div>
              </div>

              <div className='grow max-w-1/2 flex flex-col p-2'>
                <h2 className='text-center py-2 text-red-950 font-semibold text-xl'>Description</h2>
                <div className='grow p-2 border-red-950 border-2 rounded-l-lg rounded-br-none overflow-y-auto h-40'>
                  <p>Caramel Pudding is a smooth, creamy dessert with a rich caramel flavor, perfectly balanced with a delicate sweetness. The soft, velvety custard is topped with a golden caramel layer, creating a melt-in-your-mouth experience. A classic indulgence, it's ideal for any occasion or as a sweet treat to enjoy at any time!
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

export default CaramelPudding