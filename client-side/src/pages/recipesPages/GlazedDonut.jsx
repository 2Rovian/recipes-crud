import React from 'react'

function GlazedDonut() {
  return (
    <div>
      <main className='container mx-auto max-w-[900px]'>
        <div className='mx-5'>
          <h1 className='text-3xl bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-600 lg:text-4xl py-5 text-center font-bold'>Glazed Donut</h1>

          <div className='flex flex-col bg-slate-100 rounded-lg px-3 py-1 shadow'

          >
            <div className='grid grid-cols-2 min-h-[250px]'>
              <div className='h-full flex flex-col p-2'>
                <input className='text-center outline-none py-2 text-red-950 font-semibold text-lg placeholder:text-red-800' placeholder='Food Name'

                />
                <input className='text-center grow text-red-950 font-semibold placeholder:text-red-300 outline-none' placeholder='URL Image'

                />
              </div>

              <div className='flex flex-col p-2'>
                <h2 className='text-center py-2 text-red-950 font-semibold text-lg'>Instructions</h2>
                <textarea className='resize-none outline-none grow p-2 border-red-950 border-2 rounded-b-lg rounded-br-none'

                ></textarea>

                <div className='flex gap-x-2 justify-center'>
                  <label className='text-center py-2 '>Cooking Time:</label>
                  <input type="text" className='w-[35px] outline-none overflow-hidden text-red-700' placeholder='1h'

                  />
                </div>
              </div>
            </div>

            <div className='flex min-h-[250px] '>
              <div className='grow flex flex-col p-2'>
                <h2 className='text-center py-2 text-red-950 font-semibold text-lg'>Ingredients</h2>
                <textarea className='resize-none outline-none grow p-2 border-red-950 border-2 rounded-b-lg rounded-br-none'

                ></textarea>
              </div>

              <div className='grow flex flex-col p-2'>
                <h2 className='text-center py-2 text-red-950 font-semibold text-lg'>Description</h2>
                <textarea className='resize-none outline-none grow p-2 border-red-950 border-2 rounded-b-lg rounded-br-none'

                ></textarea>
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