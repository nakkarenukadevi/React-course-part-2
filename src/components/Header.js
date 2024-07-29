import React, { useEffect } from 'react'
import { auth } from "./utils/firebase";
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from 'firebase/auth';

import { addUser, removeUser } from "./utils/userSlice";
import { logo } from './utils/constants';

const Header = () => {
    let dispatch = useDispatch()
    let user = useSelector((state) => state.user)
    let navigate = useNavigate()
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

    return (
        <div className='w-full flex justify-between mx-2 py-2 z-20  absolute  bg-gradient-to-b from-black'>
            <img src={logo} className='w-36' />
            <div className='m-4'>
                {user &&
                    <button onClick={handleSigOut} className='p-4 text-white rounded-lg bg-red-700'>signOut</button>}

            </div>
        </div>
    )
}

export default Header