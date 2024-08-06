import React from 'react'
import MovieCard from './MovieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react';


const MoviesList = ({ title, movies }) => {
    let imageContainerRef = useRef();

    const handlebutton = (direction) => {
        if (direction === "prev") {
            imageContainerRef.current.scrollLeft -= 300;
        } else {
            imageContainerRef.current.scrollLeft += 300;
        }


    }


    return (
        <div className='px-6 text-white'>
            <h1 className='text-bold   text-4xl'>{title}</h1>
            <div className='flex justify-between items-center'>
                <div className='left-icon'>
                    <FontAwesomeIcon icon={faArrowLeft} onClick={() => handlebutton("prev")} className="text-2xl rounded-full text-black bg-white p-3" />
                </div>
                <div className='flex  overflow-hidden w-3/4  mx-auto ' ref={imageContainerRef}>

                    {movies?.map((movie => {
                        return <MovieCard key={movie.id} posterPath={movie?.poster_path} />
                    }))}


                </div>
                <div className='right-icon '>
                    <FontAwesomeIcon icon={faArrowRight} className="text-black text-2xl bg-white p-3 rounded-full" onClick={() => handlebutton("next")} />

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