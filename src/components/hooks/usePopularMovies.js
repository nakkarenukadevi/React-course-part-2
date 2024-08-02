import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from 'react-redux'
import { addNowPopularMovies } from "../utils/moviesSlice";

let usePopularMovies = () => {
    let dispatch = useDispatch()
    const getPopularMovies = async () => {
        let data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS);
        let json = await data.json();
        console.log(json.results);
        dispatch(addNowPopularMovies(json.results))

    }

    useEffect(() => {
        getPopularMovies();
    }, []);

};
export default usePopularMovies;