import React from 'react'
import GptSerachBar from './GptSerachBar'
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from './utils/constants';


const GptSearch = () => {
    return (
        <div>
            <div className='absolute -z-10'>
                <img src={BG_URL} alt='bg-poster' />
            </div>
            <GptSerachBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch