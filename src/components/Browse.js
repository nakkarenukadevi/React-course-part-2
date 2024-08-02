import React from 'react'
import Header from './Header';
import useNowPlayingMovies from './hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from './hooks/usePopularMovies';
import useUPComingMoives from './hooks/useUpComingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
    let showGptSearch = useSelector((store) => store.gpt.showGptSearch)
    useNowPlayingMovies();
    usePopularMovies();
    useUPComingMoives()
    return (
        <div>
            <Header />
            {showGptSearch ?
                <GptSearch /> : <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            }


        </div>
    )
}

export default Browse