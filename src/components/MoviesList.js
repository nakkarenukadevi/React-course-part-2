import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({ title, movies }) => {
    return (
        <div className='px-6 text-white'>
            <h1 className='text-bold   text-lg '>{title}</h1>
            <div className='flex overflow-x-scroll'>

                <div className='flex'>
                    {movies?.map((movie => {
                        return <MovieCard key={movie.id} posterPath={movie?.poster_path} />
                    }))}



                </div>
            </div>

        </div>
    )
}

export default MoviesList