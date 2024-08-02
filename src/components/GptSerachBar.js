import React, { useRef } from 'react'
import lang from './languageConsants'
import { useDispatch, useSelector } from 'react-redux';
import openai from './openAi';
import { API_OPTIONS } from './utils/constants';
import { addGptMovieResult } from './utils/gptSearchSlice';

const GptSerachBar = () => {
    const langKey = useSelector((store) => store.config.lang);
    let searchText = useRef(null);
    let dispatch = useDispatch()

    //search movie in TMDB
    const searchMovieTMDB = async (movie) => {
        let data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1'
            , API_OPTIONS);
        let json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = async () => {
        //Make a api call
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies  for the query" + searchText.current.value + "only give me names of 5 movies ,comma seperated like the example result give agead. exapmle Result:gadar,sholay ,bahubali,don golmal , salar";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        if (!gptResults.choices) {

        }
        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

        let promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        const tmbdResults = await Promise.all(promiseArray);
        dispatch(addGptMovieResult({ movieResults: tmbdResults, movieNames: gptMovies }));

    }

    return (
        <div className='pt-[10%] flex justify-center '>
            <from className=" w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
                <input type="text" className='p-3 m-4 col-span-9'
                    ref={searchText}
                    placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className='px-4 py-4 col-span-3 m-4 bg-blue-600 text-white rounded-lg font-bold' onClick={handleGptSearchClick}>
                    {lang[langKey].search}
                </button>

            </from>

        </div>
    )
}

export default GptSerachBar