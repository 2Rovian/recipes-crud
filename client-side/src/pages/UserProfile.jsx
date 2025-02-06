import React, { useState } from 'react'
import profilePic1 from '../assets/profilePic/boyPfp1.png';
import profilePic2 from '../assets/profilePic/boyPfp2.png';
import profilePic3 from '../assets/profilePic/boyPfp3.png';
import profilePic4 from '../assets/profilePic/boyPfp4.png';
import profilePic5 from '../assets/profilePic/girlPfp1.png';
import profilePic6 from '../assets/profilePic/girlPfp2.png';
import profilePic7 from '../assets/profilePic/girlPfp3.png';
import profilePic8 from '../assets/profilePic/girlPfp4.png';
import axios from 'axios';

function UserProfile() {
    const [showMenuChangePfp, setshowMenuChangePfp] = useState(false);
    const [profilePic] = useState([
        profilePic1, profilePic2, profilePic3, profilePic4, profilePic5, profilePic6, profilePic7, profilePic8
    ]);
    const [index, setIndex] = useState(0);

    const handleNexProfilePic = () => {
        setIndex(index + 1);
        if (index >= 7) {
            setIndex(0)
        }
    }

    const handlePreviousProfilePic = () => {
        setIndex(index - 1);
        if (index <= 0) {
            setIndex(7)
        }
    }

    const [username, setUsername] = useState('Your Name');
    const [changeUsername, setchangeUsername] = useState(false);


    const handleInputChange = (e) => {
        setUsername(e.target.value);
    }

    const clearInputName = () => {
        setUsername("")
    }

    const updateProfileName = async () => {
        const userId = "67a3fe17531cabf9423211b4";
        const name_profile = username; // Pegamos o nome atualizado do state
        try {
            const response = await axios.put(
                "http://localhost:8000/api/update-nameProfile",
                { userId, name_profile },
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`, 
                  },
                }
              );

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className='w-[400px] lg:w-[600px] h-fit mx-auto mt-10 px-6 bg-neutral-300 border-2 border-red-950 flex flex-col justify-center text-center rounded-xl shadow'>
                <div className='grow flex justify-center py-5'>
                    <div className='relative lg:my-2'>
                        <img src={profilePic[index]} alt="profile-pic" className='size-40 lg:size-60 rounded-full shadow' />

                        {showMenuChangePfp &&
                            (<div className='absolute top-[40%] w-[145%] flex justify-between left-1/2 -translate-x-1/2'>
                                <i className="fa-solid fa-left-long bg-slate-800/70 hover:bg-slate-800/100 cursor-pointer duration-200 ease-in-out text-slate-100 rounded-lg p-2"
                                    onClick={handlePreviousProfilePic}
                                ></i>
                                <i className="fa-solid fa-right-long bg-slate-800/70 hover:bg-slate-800/100 cursor-pointer duration-200 ease-in-out text-slate-100 rounded-lg p-2"
                                    onClick={handleNexProfilePic}
                                ></i>
                            </div>)
                        }


                        <i className={`fa-solid fa-${showMenuChangePfp ? "check" : "pen"} absolute right-2 bottom-2 p-2 rounded-full bg-slate-800 text-slate-100 cursor-pointer hover:outline-3 shadow`}
                            onClick={() => { setshowMenuChangePfp(!showMenuChangePfp) }}
                        ></i>
                    </div>

                </div>
                <div className='grow pb-5'>
                    <div className='flex justify-center items-center gap-x-2 py-2 group'>

                        {changeUsername ?
                            (<>
                                <input type="text" className='w-[250px] text-center  p-1 text-xl outline-2 outline-slate-950 rounded-md' placeholder='Your Name'
                                    value={username}
                                    onChange={handleInputChange}

                                />
                                <i className={`fa-solid fa-check cursor-pointer text-slate-950 p-1 hover:scale-110`}
                                    onClick={() => { setchangeUsername(!changeUsername); updateProfileName(); }}
                                ></i>

                                <i className={`fa-solid fa-x cursor-pointer text-slate-950 p-1 hover:scale-110`}
                                    onClick={clearInputName}
                                ></i>
                            </>
                            ) :
                            (<>
                                <span className='text-xl'>{username}
                                </span>
                                <i className={`fa-solid fa-feather cursor-pointer text-slate-950 p-1 hover:scale-110`}
                                    onClick={() => { setchangeUsername(!changeUsername) }}
                                ></i>
                            </>
                            )}
                    </div>

                    <p>Your number of recipes</p>
                    <p>Your favorite food</p>
                    <p>A little more about you</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile