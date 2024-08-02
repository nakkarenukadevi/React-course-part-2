import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from "./MoviesList"

const GptMovieSuggestions = () => {
    const { movieResults, movieNames } = useSelector((store) => store.gpt);
    if (!movieNames) return null;
    return (
        <div className='p-4 m-4 bg-black text-white'>

            <div>
                {movieNames.map((movieName, index) => <MovieList key={movieName} tilte={movieName} movies={movieResults[index]} />)}

            </div>
        </div>
    )
}

export default GptMovieSuggestions