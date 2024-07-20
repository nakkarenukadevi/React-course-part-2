import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />

        },
        {
            path: "/browser",
            element: <Browse />
        }

    ])
    return (
        <RouterProvider router={appRouter} />


    )
}

export default Body