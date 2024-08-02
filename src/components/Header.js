import React, { useEffect } from 'react'
import { auth } from "./utils/firebase";
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from 'firebase/auth';

import { addUser, removeUser } from "./utils/userSlice";
import { logo, SUPPORTED_LANGUAGES } from './utils/constants';
import { toggleGptSearchView } from './utils/gptSearchSlice';
import { changeLanguage } from "./utils/configSlice"
const Header = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let user = useSelector((state) => state.user);
    let showGptSearch = useSelector((store) => store.gpt.showGptSearch)

    const handleSigOut = () => {
        signOut(auth).then(() => {
            navigate('/')

        }).catch((error) => {
            navigate("/error")
        })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate('/browser')
            } else {
                // User is signed out

                dispatch(removeUser());
                navigate('/')
            }
        });
        // unsubscribe when component unmounts
        return () => unsubscribe();
    }, []);
    const handleGptSearchClick = () => {
        //Toggle gpt search
        dispatch(toggleGptSearchView())

    }
    const handleLanguageChange = (e) => {

        dispatch(changeLanguage(e.target.value))
    }
    return (
        <div className='w-screen flex justify-between shadow-lg mx-2 py-2 z-20  absolute  bg-gradient-to-b from-black'>
            <img src={logo} className='w-36' />
            <div className=' '>

                <div className='flex'>

                    {user && <>
                        {showGptSearch && <select className='p-2 m-2 bg-gray-900 text-white' onClick={(e) => handleLanguageChange(e)}>
                            {SUPPORTED_LANGUAGES.map((lang) => {
                                return <option value={lang.identifier} key={lang.identifier}>{lang.name}</option>
                            })}

                        </select>}

                        <div>
                            <button className='bg-violet-700 text-white rounded-lg px-7  py-3 m-2' onClick={handleGptSearchClick}>{showGptSearch ? "Home page" : "Gpt Search"}</button></div>
                        <button onClick={handleSigOut} className='px-7 py-3 m-2 text-white rounded-lg bg-red-700'>sign Out</button>
                    </>

                    }

                </div>
            </div>
        </div>
    )
}

export default Header