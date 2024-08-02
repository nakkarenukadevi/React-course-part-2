import React from 'react'

const ViedoTitle = ({ title, overview }) => {
    return (
        <div className=' absolute w-screen aspect-video pt-36 px-12 text-white  bg-gradient-to-r form-black'>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='p-6 text-lg  w-1/4'>{overview}</p>
            <div className=''>
                <button className='bg-white rounded-lg hover:opacity-80   text-sm  mx-4 p-3  px-4 '>Play</button>
                <button className='bg-gray-500 rounded-lg hover:opacity-20 hover:text-white text-black  text-sm bg-opacity-45 p-3 px-4 '>More Info</button>
            </div>


        </div>
    )
}

export default ViedoTitle