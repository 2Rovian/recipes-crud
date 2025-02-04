import React from 'react'
import boyPfp1 from '../assets/profilePic/boyPfp1.png';
import boyPfp2 from '../assets/profilePic/boyPfp2.png';
import boyPfp3 from '../assets/profilePic/boyPfp3.png';


function UserProfile() {
  return (
    <div>
        <div className='w-[400px] h-fit mx-auto mt-10 px-6 bg-neutral-300 border-2 border-red-950 flex flex-col justify-center text-center'>
            <div className='grow flex justify-center py-5'>
                <img src={boyPfp1} alt="profile-pic" className='size-40 rounded-full'/>
            </div>
            <div className='grow pb-5'>
                <p>Your Name</p>
                <p>Your number of recipes</p>
                <p>Your favorite food</p>
                <p>A little more about you</p>
            </div>
        </div>
    </div>
  )
}

export default UserProfile