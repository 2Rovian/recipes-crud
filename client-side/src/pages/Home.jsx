import React from 'react'

//food imgs
import bolo from '../assets/bolo.jpg'
import hamburguer from '../assets/hamburguer.jpg'
import donut from '../assets/donut.png'
import meet from '../assets/meet.png'
import pudim from '../assets/caramel-pudding.jpg'
import spageti from '../assets/spageti.jpg'

function Home() {
  return (
    <div>
      <main className='container mx-auto max-w-[1200px]'>
        <div className='mx-5'>
          <h1 className='text-3xl bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-600 lg:text-4xl py-7 text-center font-bold'>Welcome to YourRecipes!</h1>

          <div className='flex flex-col gap-y-4 md:grid grid-cols-2 md:gap-x-3'>
            
            <div className='flex flex-col justify-center bg-slate-100 rounded-lg px-3 py-1 shadow'>
              <div className='flex justify-between py-2'>
                <span className='font-bold text-xl text-red-950'>Traditional Burger</span>
                <span className='cursor-pointer text-red-950 hover:bg-red-900 hover:text-amber-500 border-2 duration-500 ease-in-out px-2 rounded-lg'>See Recipe</span>
              </div>
              <img src={hamburguer} alt="hamburguer-image" className='w-full h-[400px] rounded-xl object-cover'/>
              <button className='py-2 text-white cursor-pointer duration-500 ease-in-out bg-red-900 hover:bg-orange-300 hover:text-red-950 rounded-lg my-2'>Save</button>
            </div>
            
            <div className='flex flex-col justify-center bg-slate-100 rounded-lg px-3 py-1 shadow'>
              <div className='flex justify-between py-2'>
                <span className='font-bold text-xl text-red-950'>Grilled Steak</span>
                <span className='cursor-pointer text-red-950 hover:bg-red-900 hover:text-amber-500 border-2 duration-500 ease-in-out px-2 rounded-lg'>See Recipe</span>
              </div>
              <img src={meet} alt="meet-image" className='w-full h-[400px] rounded-xl object-cover'/>
              <button className='py-2 text-white cursor-pointer duration-500 ease-in-out bg-red-900 hover:bg-orange-300 hover:text-red-950 rounded-lg my-2'>Save</button>
            </div>
            <div className='flex flex-col justify-center bg-slate-100 rounded-lg px-3 py-1 shadow'>
              <div className='flex justify-between py-2'>
                <span className='font-bold text-xl text-red-950'>Chocolate Cake</span>
                <span className='cursor-pointer text-red-950 hover:bg-red-900 hover:text-amber-500 border-2 duration-500 ease-in-out px-2 rounded-lg'>See Recipe</span>
              </div>
              <img src={bolo} alt="bolo-image" className='w-full h-[400px] rounded-xl object-cover'/>
              <button className='py-2 text-white cursor-pointer duration-500 ease-in-out bg-red-900 hover:bg-orange-300 hover:text-red-950 rounded-lg my-2'>Save</button>
            </div>
            <div className='flex flex-col justify-center bg-slate-100 rounded-lg px-3 py-1 shadow'>
              <div className='flex justify-between py-2'>
                <span className='font-bold text-xl text-red-950'>Glazed Donut</span>
                <span className='cursor-pointer text-red-950 hover:bg-red-900 hover:text-amber-500 border-2 duration-500 ease-in-out px-2 rounded-lg'>See Recipe</span>
              </div>
              <img src={donut} alt="donut-image" className='w-full h-[400px] rounded-xl object-cover'/>
              <button className='py-2 text-white cursor-pointer duration-500 ease-in-out bg-red-900 hover:bg-orange-300 hover:text-red-950 rounded-lg my-2'>Save</button>
            </div>

            <div className='flex flex-col justify-center bg-slate-100 rounded-lg px-3 py-1 shadow'>
              <div className='flex justify-between py-2'>
                <span className='font-bold text-xl text-red-950'>Caramel Pudding</span>
                <span className='cursor-pointer text-red-950 hover:bg-red-900 hover:text-amber-500 border-2 duration-500 ease-in-out px-2 rounded-lg'>See Recipe</span>
              </div>
              <img src={pudim} alt="flan-image" className='w-full h-[400px] rounded-xl object-cover object-right'/>
              <button className='py-2 text-white cursor-pointer duration-500 ease-in-out bg-red-900 hover:bg-orange-300 hover:text-red-950 rounded-lg my-2'>Save</button>
            </div>

            <div className='flex flex-col justify-center bg-slate-100 rounded-lg px-3 py-1 shadow'>
              <div className='flex justify-between py-2'>
                <span className='font-bold text-xl text-red-950'>Spaghetti Carbonara</span>
                <span className='cursor-pointer text-red-950 hover:bg-red-900 hover:text-amber-500 border-2 duration-500 ease-in-out px-2 rounded-lg'>See Recipe</span>
              </div>
              <img src={spageti} alt="spageti-image" className='w-full h-[400px] rounded-xl object-cover object-right'/>
              <button className='py-2 text-white cursor-pointer duration-500 ease-in-out bg-red-900 hover:bg-orange-300 hover:text-red-950 rounded-lg my-2'>Save</button>
            </div>
          </div>
        </div>
      </main>
      <footer className='py-5'>
        <p className='text-center text-slate-700'>Made by <span className='text-slate-800 font-bold hover:underline'><a href="https://github.com/2Rovian" target='_blank'>Rovian</a></span>.</p>
      </footer>
    </div>
  )
}

export default Home