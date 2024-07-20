import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    let [togglesign, settogglesign] = useState(true)
    const handletoogleSignform = () => {
        settogglesign(!togglesign)
    }
    const handleButtonClick = () => {

    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_medium.jpg" />
            </div>
            <from className='w-3/12 absolute top-0 p-12 right-0 left-0 bg-black bg-opacity-50 my-20 mx-auto h-58 text-white text-2xl'>
                <h1 className='font-bold text-3xl py-4'>{togglesign ? "sign in" : "Sign up"}</h1>
                {!togglesign && <input type="text" placeholder='full Name'
                    className='p-4 my-4 bg-slate-400 rounded-lg w-full' />}
                <input type="text" placeholder='Email Address'
                    className='p-4 my-4 bg-slate-400 rounded-lg w-full' />
                <input type="password" placeholder='password'
                    className='p-4 my-4 bg-slate-400 rounded-lg w-full' />
                <button className='p-3 my-4 rounded-lg bg-red-600 w-full text-white font-sans text-xl font-bold' onClick={handleButtonClick}>
                    {togglesign ? "sign in" : "Sign up"}
                </button>
                <p className='cursor-pointer' onClick={handletoogleSignform}><span>{togglesign ? " New to Netfilx? sign up Now" : "All redy Resigted Sign in Now"}</span></p>
            </from>

        </div>
    )
}

export default Login