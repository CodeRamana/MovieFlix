import SearchBar from "../components/SearchBar";
import cinema from '../assets/cinema.png';
import collection from '../assets/movies.png';
import { useEffect } from "react";
import useDataContext from "../context/DataContext";
import api from '../instances/instance'
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

const Home = () => {
    const { movies, search, setMovies,page,pageDispatch} = useDataContext();
    const apiKey = import.meta.env.VITE_API_KEY;
    const fetchMovies = async (txt, type, page) => {
        try {
            console.log(page)
            const movies = await api.get("", {
                params: {
                    apikey: apiKey,
                    s: txt,
                    type: type || undefined,
                    page:page['currentPage']
                }
            })

            const total = Math.ceil( parseInt(movies.data.totalResults || 1)/10);
            console.log(page['currentPage'])
            if(page['currentPage'] === 1 || total !== page['totalPage'] ) pageDispatch({type:"SET_TOTAL_PAGES",payload:total});


            movies.data.Response === "True" ? setMovies(movies.data.Search) : setMovies([])
        }
        catch (err) {
            console.log(err?.message || err?.response?.message)
        }
    }

    useEffect(() => {
        fetchMovies(search['search'], search['category'],page)
    }, [search,page['currentPage']])

    return (
        <main>
            <img src={cinema} className="mx-auto object-cover max-w-[1200px] w-[100%] h-[150px] sm:w-[90%] sm:my-5 sm:rounded-md" alt="Cinema" />
            <SearchBar />

            {
                movies.length === 0 && (
                    <div className="flex flex-col items-center justify-center gap-15 max-w-[1200px] w-[90%] mx-auto my-5 sm:flex-row">
                        <img src={collection} alt="" className="max-w-[350px] order-2 w-full rounded-md shadow-xl shadow-[#a3abb2]  sm:order-1 sm:w-[350px] md:w-[500px]" />
                        <div className="flex flex-col gap-5 flex-wrap order-1 sm:order-2">
                            <p className="text-white text-4xl font-extrabold tracking-normal font-serif">Your next favorite movie is just a search away!</p>
                            <p className="text-[#a3abb2] text-lg font-extrabold tracking-normal font-serif">Explore thousands of titles and discover your next cinematic adventure.</p>
                        </div>
                    </div>
                )
            }

            {
                movies.length !== 0 && (
                    <>
                        <div>
                            <Pagination />
                        </div>
                        <div className="max-w-[1200px] w-[95%] gap-5 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
                            {movies.map((movie) => (<MovieCard key={movie.imdbID} movie={movie} />))}
                        </div>
                    </>
                )
            }


        </main>
    );

}

export default Home;