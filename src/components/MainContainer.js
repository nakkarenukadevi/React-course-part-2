import React from 'react'
import { useSelector } from 'react-redux'
import ViedoTitle from './ViedoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    let movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movies) return
    const mainMovie = movies[0];

    const { original_title, overview, id } = mainMovie
    return (
        <div>
            <ViedoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />

        </div>
    )
}

export default MainContainer