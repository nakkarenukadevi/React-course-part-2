import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { useDispatch } from "react-redux"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice"

const Body = () => {
    let dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />

        },
        {
            path: "/browser",
            element: <Browse />
        },


    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));

            } else {
                // User is signed out

                dispatch(removeUser());

            }
        });

    }, []);

    return (
        <RouterProvider router={appRouter} />


    )
}

export default Body