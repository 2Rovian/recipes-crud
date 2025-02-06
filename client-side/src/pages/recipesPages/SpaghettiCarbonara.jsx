import React from 'react'
import spaghetti from '../../assets/spageti.jpg'

function SpaghettiCarbonara() {
  return (
    <div>
      <main className='container mx-auto max-w-[700px] '>
        <div className='mx-5'>
          <h1 className='text-3xl bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-700 lg:text-4xl py-5 text-center font-bold'>Recipe Details</h1>

          <div className='flex flex-col bg-slate-100 rounded-lg px-3 py-1 shadow mb-5'>
            <div className='grid grid-cols-2 min-h-[250px]'>
              <div className='h-full flex flex-col p-2'>
                <div className='text-center py-2 text-red-900 '>
                  <span className='font-bold text-xl'>Spaghetti Carbonara</span>
                </div>

                <img className='grow rounded-lg object-cover object-right border-red-950 border shadow shadow-red-900 h-40 lg:h-52' alt='URL Image'
                  src={spaghetti}
                />
              </div>

              <div className='flex flex-col p-2'>
                <h2 className='text-center py-2 text-red-950 font-semibold text-xl'>Instructions</h2>

                <div className='grow p-2 border-red-950 border-2 rounded-l-lg rounded-br-none overflow-y-auto h-40'>
                  <ul className='flex flex-col gap-y-2 list-decimal list-inside marker:font-semibold'>
                    <li>
                      <span className='font-semibold'>Boil the Spaghetti:</span> Cook the pasta in salted water until al dente.
                    </li>
                    <li>
                      <span className="font-semibold">Prepare the Sauce:</span> Whisk eggs, Pecorino Romano, Parmesan, salt, and pepper together in a bowl.
                    </li>
                    <li>
                      <span className="font-semibold">Cook the Pancetta:</span> Fry pancetta or guanciale in a pan until crispy and golden.
                    </li>
                    <li>
                      <span className="font-semibold">Combine:</span> Toss the cooked pasta with the pancetta and egg mixture. Add some pasta water to make a creamy sauce.
                    </li>
                    <li>
                      <span className="font-semibold">Serve:</span> Top with extra grated cheese and freshly ground black pepper. Enjoy!
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
                      <span className="font-semibold">Spaghetti</span> - 200g
                    </li>

                    <li>
                      <span className="font-semibold">Pancetta or Guanciale</span> - 100g, diced
                    </li>

                    <li>
                      <span className="font-semibold">Eggs</span> - 2 large eggs
                    </li>

                    <li>
                      <span className="font-semibold">Pecorino Romano cheese</span> - 50g, grated
                    </li>

                    <li>
                      <span className="font-semibold">Parmesan cheese</span> - 50g, grated
                    </li>

                    <li>
                      <span className="font-semibold">Black pepper</span> - freshly ground, to taste
                    </li>

                    <li>
                      <span className="font-semibold">Salt</span> - for boiling pasta
                    </li>
                  </ul>

                </div>
              </div>

              <div className='grow max-w-1/2 flex flex-col p-2'>
                <h2 className='text-center py-2 text-red-950 font-semibold text-xl'>Description</h2>
                <div className='grow p-2 border-red-950 border-2 rounded-l-lg rounded-br-none overflow-y-auto h-40'>
                  <p>Spaghetti Carbonara is a timeless Italian pasta dish made with spaghetti, crispy pancetta, eggs, and a blend of Pecorino and Parmesan cheese. It’s rich, creamy, and full of savory flavor, offering a satisfying and indulgent meal.</p>
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

export default SpaghettiCarbonara