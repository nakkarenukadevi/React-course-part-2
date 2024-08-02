import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    let movies = useSelector((store) => store.movies)
    console.log({ movies })
    return (
        <div>
            {movies.nowPlayingMovies && <div className='bg-black'>
                <div className=' relative pl-12 z-20 ' >
                    <MoviesList title={"Now playing"} movies={movies.nowPlayingMovies} />
                    <MoviesList title={"TopRated"} movies={movies.nowPlayingMovies} />
                    <MoviesList title={"Popular"} movies={movies.nowPopularMovies} />
                    <MoviesList title={"upComing Movies"} movies={movies.nowUpComingMovies} />
                    <MoviesList title={"Horror"} movies={movies.nowPlayingMovies} />
                </div>
            </div>

            }

        </div>
    )
}

export default SecondaryContainer