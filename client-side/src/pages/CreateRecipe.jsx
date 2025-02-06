import React, { useState } from 'react'
import axios from 'axios'

function CreateRecipe() {

    const [data, setData] = useState({
        title: '',
        instructions: '',
        ingredients: '',
        cookingTime: '',
        description: '',
        URL_Image: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validação de campos obrigatórios
        if (!data.title || !data.description || !data.ingredients || !data.instructions || !data.cookingTime) {
            setErrorMessage("Failed to create recipe. Please try again.")
            setData({ title: '', instructions: '', ingredients: '', cookingTime: '', description: '', URL_Image: '' })

        }

        const { title, instructions, ingredients, cookingTime, description, URL_Image } = data;

        try {
            // obtem token JWT
            const token = localStorage.getItem('token');

            if(!token){
                setErrorMessage("User not authenticated");
                return;
            }

            const response = await axios.post(
                "http://localhost:8000/api/new-recipe",
                { title, instructions, ingredients, cookingTime, description, URL_Image },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Envia o token no cabeçalho
                    },
                }
            );

            // Resetar o formulário após sucesso
            setData({ title: '', instructions: '', ingredients: '', cookingTime: '', description: '', URL_Image: '' });


        } catch (err) {
            console.log(err)
        }

    }

    return (
        <div>
            <main className='container mx-auto max-w-[900px]'>
                <div className='mx-5'>
                    <h1 className='text-3xl bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-600 lg:text-4xl py-5 text-center font-bold'>Create Your Own Recipe</h1>

                    <form className='flex flex-col bg-slate-100 rounded-lg px-3 py-1 shadow'
                        onSubmit={handleSubmit}
                    >
                        <div className='grid grid-cols-2 min-h-[250px]'>
                            <div className='h-full flex flex-col p-2'>
                                <input className='text-center outline-none py-2 text-red-950 font-semibold text-lg placeholder:text-red-800' placeholder='Food Name'
                                    value={data.title}
                                    onChange={(e) => { setData({ ...data, title: e.target.value }) }}
                                />
                                <input className='text-center grow text-red-950 font-semibold placeholder:text-red-300 outline-none' placeholder='URL Image'
                                    value={data.URL_Image}
                                    onChange={(e) => { setData({ ...data, URL_Image: e.target.value }) }}
                                />
                            </div>

                            <div className='flex flex-col p-2'>
                                <h2 className='text-center py-2 text-red-950 font-semibold text-lg'>Instructions</h2>
                                <textarea className='resize-none outline-none grow p-2 border-red-950 border-2 rounded-b-lg rounded-br-none'
                                    value={data.instructions}
                                    onChange={(e) => { setData({ ...data, instructions: e.target.value }) }}
                                ></textarea>

                                <div className='flex gap-x-2 justify-center'>
                                    <label className='text-center py-2 '>Cooking Time:</label>
                                    <input type="text" className='w-[35px] outline-none overflow-hidden text-red-700' placeholder='1h'
                                        value={data.cookingTime}
                                        onChange={(e) => { setData({ ...data, cookingTime: e.target.value }) }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='flex min-h-[250px] '>
                            <div className='grow flex flex-col p-2'>
                                <h2 className='text-center py-2 text-red-950 font-semibold text-lg'>Ingredients</h2>
                                <textarea className='resize-none outline-none grow p-2 border-red-950 border-2 rounded-b-lg rounded-br-none'
                                    value={data.ingredients}
                                    onChange={(e) => { setData({ ...data, ingredients: e.target.value }) }}
                                ></textarea>
                            </div>

                            <div className='grow flex flex-col p-2'>
                                <h2 className='text-center py-2 text-red-950 font-semibold text-lg'>Description</h2>
                                <textarea className='resize-none outline-none grow p-2 border-red-950 border-2 rounded-b-lg rounded-br-none'
                                    value={data.description}
                                    onChange={(e) => { setData({ ...data, description: e.target.value }) }}
                                ></textarea>
                            </div>
                        </div>
                        <button type='submit' className='py-2 text-white cursor-pointer duration-500 ease-in-out bg-red-900 hover:bg-orange-300 hover:text-red-950 rounded-lg m-2'>Create Recipe</button>
                        {errorMessage.length > 1 &&
                            <div className='text-center text-red-900'>
                                <span>{errorMessage}</span>
                                <i className="fa-solid text-slate-950 fa-x cursor-pointer ml-2  "
                                    onClick={() => setErrorMessage('')}
                                ></i>
                            </div>}
                    </form>

                </div>

            </main>
        </div>
    )
}

export default CreateRecipe