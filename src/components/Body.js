import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { useDispatch } from "react-redux"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const Body = () => {


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


    return (
        <RouterProvider router={appRouter} />


    )
}

export default Body