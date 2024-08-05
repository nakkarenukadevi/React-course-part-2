import React, { useState, useRef } from 'react'
import Header from './Header';
import checkValidaeData from './utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from './utils/userSlice';
import { BG_URL } from './utils/constants';

const Login = () => {

    let dispatch = useDispatch();
    let [togglesign, settogglesign] = useState(true);

    let [errormassage, setErrorMassage] = useState(null);

    const handletoogleSignform = () => {
        settogglesign(!togglesign)
    }

    let userName = useRef(null)
    let email = useRef(null);
    let password = useRef(null);

    const handleButtonClick = () => {
        //vaildate the form data
        if (togglesign == true) {
            let massage = checkValidaeData(email.current.value, password.current.value);
            setErrorMassage(massage);
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMassage(errorCode + "-" + errorMessage)
                });

        } else {
            //sign up
            let massage = checkValidaeData(email.current.value, password.current.value);
            setErrorMassage(massage);
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: userName.current.value, photoURL: ""
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                        // Profile updated!


                    }).catch((error) => {
                        // An error occurred
                        // ...
                        setErrorMassage(error.massage)
                    });


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMassage(errorCode + "-" + errorMessage)

                });
        }

    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src={BG_URL} />
            </div>
            <from onSubmit={(e) => { e.preventdefault() }} className='w-3/12 p-3 absolute top-0  right-0 left-0 bg-black bg-opacity-50 my-36 mx-auto h-58 text-white text-xl'>
                <h1 className='font-bold text-3xl py-4'>{togglesign ? "sign in" : "Sign up"}</h1>

                {!togglesign && <input type="text" placeholder='user Name' ref={userName}
                    className='p-3 my-3 bg-slate-400 rounded-lg w-10/12' />}

                <input type="text" placeholder='Email Address' ref={email}
                    className='p-3 my-3 bg-slate-400 rounded-lg w-10/12' />

                <input type="password" placeholder='password' ref={password}
                    className='p-3 my-3 bg-slate-400 rounded-lg w-10/12' />
                <p className='font-sans font-bold text-xl text-red-700'>{errormassage}</p>
                <button onClick={handleButtonClick} className='p-2 my-3  rounded-lg bg-red-600 w-11/12 text-white font-sans text-xl font-bold' >
                    {togglesign ? "sign in" : "Sign up"}
                </button>
                <p className='cursor-pointer' onClick={handletoogleSignform}><span>{togglesign ? " New to Netfilx? sign up Now" : "Already Resigted ? Sign in Now"}</span></p>
            </from>

        </div>
    )
}

export default Login