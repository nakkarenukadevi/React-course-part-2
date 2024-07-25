import React from 'react'
import { auth } from "./utils/firebase";
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const Header = () => {

    let navigate = useNavigate()
    const handleSigOut = () => {
        signOut(auth).then(() => {
            navigate('/')

        }).catch((error) => {
            navigate("/error")
        })
    }

    return (
        <div className='w-full flex justify-between mx-2 py-2 z-20  absolute  bg-gradient-to-b from-black'>
            <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className='w-36' />
            <div>


                <button onClick={handleSigOut} className='p-4 text-white rounded-lg bg-red-700'>Sign Out</button>
            </div>
        </div>
    )
}

export default Header