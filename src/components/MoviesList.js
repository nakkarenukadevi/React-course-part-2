import React from 'react'
import MovieCard from './MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from 'swiper/modules';
const MoviesList = ({ title, movies }) => {
    return (
        <div className='px-6 text-white'>
            <h1 className='text-bold   text-4xl'>{title}</h1>
            <div className=''>

                <div className='flex flex-wrap '>
                    {movies?.map((movie => {
                        return <MovieCard key={movie.id} posterPath={movie?.poster_path} />
                    }))}



                </div>
            </div>

        </div>
    )
    // return (
    //     <Swiper
    //         modules={[Navigation, Pagination, Scrollbar, A11y]}
    //         spaceBetween={50}
    //         slidesPerView={1}
    //         navigation
    //         pagination={{ clickable: true }}
    //         scrollbar={{ draggable: true }}
    //         className='swiper'
    //     >
    //         {movies?.map((movie) => (
    //             <SwiperSlide key={movie.id}>
    //                 <MovieCard posterPath={movie?.poster_path} />
    //             </SwiperSlide>
    //         ))}
    //     </Swiper>
    // )

}

export default MoviesList