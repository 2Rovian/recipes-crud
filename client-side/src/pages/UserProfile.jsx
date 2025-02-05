import React, { useState } from 'react'
import boyPfp1 from '../assets/profilePic/boyPfp1.png';
import boyPfp2 from '../assets/profilePic/boyPfp2.png';
import boyPfp3 from '../assets/profilePic/boyPfp3.png';


function UserProfile() {
    const [showMenuChangePfp, setshowMenuChangePfp] = useState(false);

    return (
        <div>
            <div className='w-[400px] h-fit mx-auto mt-10 px-6 bg-neutral-300 border-2 border-red-950 flex flex-col justify-center text-center rounded-xl'>
                <div className='grow flex justify-center py-5'>
                    <div className='relative'>
                        <img src={boyPfp1} alt="profile-pic" className='size-40 rounded-full shadow' />
                        <div className='absolute top-[40%] w-full flex justify-between'>
                            <i className="fa-solid fa-left-long bg-slate-800/70 text-slate-100 rounded-lg p-1"></i>
                            <i className="fa-solid fa-right-long bg-slate-800/70 text-slate-100 rounded-lg p-1"></i>
                        </div>
                        <i className="fa-solid fa-pen absolute right-2 bottom-2 p-2 rounded-full bg-slate-800 text-slate-100 cursor-pointer hover:outline-3 shadow"></i>
                    </div>



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