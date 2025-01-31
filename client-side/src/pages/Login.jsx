import React, { useState }  from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/authContext';

function Login() {
    const { setIsAuthenticated } = useAuth();

    const [isMenuRegister, setIsMenuRegister] = useState(true);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
    const [isRegisterSucessful, setIsRegisterSucessful] = useState(false);

    const navigate = useNavigate();

    const [Data, setData] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    });

    const [ErrorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Validação de campos obrigatórios
        if (!Data.username || !Data.password) {
            setErrorMessage("Username and password are required!");
            return;
        }

        if (isMenuRegister && !Data.confirmPassword) {
            setErrorMessage("Confirm password is required!");
            return;
        }

        if (isMenuRegister && Data.password !== Data.confirmPassword) {
            setErrorMessage("Passwords do not match!");
            return;
        }

        if (isMenuRegister) {
            const { username, password } = Data;

            try {
                const { data } = await axios.post("http://localhost:8000/api/register", { username, password })
                // if (data){navigate('/')};
                if (data) {
                    setIsRegisterSucessful(true);
                    setTimeout(() => {
                        navigate('/') // redireciona para a home
                    }, 5000);

                };
            } catch (error) {
                // Tratar erro na requisição
                setErrorMessage("An error occurred during registration.");
                console.error("Error during registration:", error);
            }

        } else {
            try {
                const { username, password } = Data;
                const { data } = await axios.post("http://localhost:8000/api/login", { username, password });

                if (data && data.token) {
                    localStorage.setItem('token', data.token);
                    setIsLoginSuccessful(true);
                    setIsAuthenticated(true);
                    setTimeout(() => {
                        navigate('/');
                    }, 3000);
                }
                
            } catch (error) {
                setErrorMessage(error.response?.data?.message || "An error occurred during login.");
                console.error("Error during login:", error);
            }
        }
    }

    return (
        <div className=''>
            <div className='w-[400px] h-fit px-6 rounded-xl  mx-auto mt-10 bg-neutral-300 border-2 border-red-950'>
                <form className='h-full flex flex-col' onSubmit={handleSubmit}>
                    <p className='font-semibold py-5 text-2xl text-red-700'>{isMenuRegister ? "Create your account" : "Log in your account"}</p>
                    <input type="text" className='bg-slate-100 rounded-md py-1 outline-none pl-2' placeholder='Username'
                        value={Data.username}
                        onChange={(e) => setData({ ...Data, username: e.target.value })}
                    />

                    <div className='items-center mt-2 flex bg-slate-100 rounded-md'>
                        <input type={isPasswordVisible ? "text" : "password"} className=' rounded-md py-1 outline-none pl-2 grow' placeholder='Password '
                            value={Data.password}
                            onChange={(e) => setData({ ...Data, password: e.target.value })}
                        />
                        <i className={`fa-solid fa-eye${isPasswordVisible ? "" : "-slash"} p-2 cursor-pointer`}
                            onClick={() => { setIsPasswordVisible(!isPasswordVisible) }}
                        ></i>
                    </div>

                    {ErrorMessage && (
                        <div className='text-red-600 text-sm mt-2'>
                            <span>{ErrorMessage}</span>
                            <i className="fa-solid text-slate-950 fa-x cursor-pointer ml-2  "
                                onClick={() => setErrorMessage('')}
                            ></i>
                        </div>
                    )}

                    {isMenuRegister && <div className='items-center flex bg-slate-100 mt-2 rounded-md'>
                        <input type={isConfirmPasswordVisible ? "text" : "password"} className=' rounded-md py-1 outline-none pl-2 grow' placeholder='Confirm Password '
                            value={Data.confirmPassword}
                            onChange={(e) => setData({ ...Data, confirmPassword: e.target.value })}
                        />
                        <i className={`fa-solid fa-eye${isConfirmPasswordVisible ? "" : "-slash"} p-2 cursor-pointer`}
                            onClick={() => { setIsConfirmPasswordVisible(!isConfirmPasswordVisible) }}
                        ></i>
                    </div>}


                    <p className='my-2 text-red-900'>{isMenuRegister ? "Already have an account? " : "Don't have an account? "} <span className='text-red-700 font-bold cursor-pointer hover:underline' onClick={() => { setIsMenuRegister(!isMenuRegister); setErrorMessage('') }}>{isMenuRegister ? "Login" : "Register"}</span></p>

                    <button type='submit' className='mb-5 mt-1 py-2 cursor-pointer rounded-lg text-slate-100 bg-red-900 hover:bg-red-800 active:bg-red-700 font-bold'>{isMenuRegister ? "Sign up" : "Login"}</button>
                </form>

            </div>

            {isRegisterSucessful && (<div className='bg-neutral-50 w-[200px] mx-auto my-10 py-5 rounded-full'>
                <p className='text-green-500 text-center font-semibold'>Register Successful! &#x2705;</p>

            </div>)}

            {isLoginSuccessful && (<div className='bg-neutral-50 w-[200px] mx-auto my-10 py-5 rounded-full'>
                <p className='text-green-500 text-center font-semibold'>Login Successful! &#x2705;</p>

            </div>)}
        </div>
    )
}

export default Login