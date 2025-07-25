import { useParams } from 'react-router'
import api from '../instances/instance'
import _api from '../instances/publicInstance'
import { useEffect, useState } from 'react';
import useDataContext from '../context/DataContext';
import { RxAvatar } from "react-icons/rx";
import StarRating from '../components/StarRating';


const MovieDetails = () => {
    const { imdbID } = useParams()
    const apiKey = import.meta.env.VITE_API_KEY;
    const { details, setDetails } = useDataContext();
    let arr = [];

    const fetchMovieDetails = async (id, key) => {
        try {

            const localData = JSON.parse(localStorage.getItem("movies")) 
            const oldId = localData.find((value)=>value.imdbID === id).id;
             const movie = await _api.get(`/Movies/${oldId}`);
             setDetails(movie.data)
        }
        catch (err) {
            console.log(err?.message || err?.response?.message)
             const omdbData = await api.get("", {
                params: {
                    i: id,
                    plot: "full",
                    apiKey: key
                }
            })
            omdbData.data.userRating = 0;

            const newMovie = {
                ...omdbData.data,
                userRating: ''
            };

            
           const result = await _api.post('/Movies',newMovie);
           const newId = result['data'].id

           arr = [...arr,{id:newId,imdbID:omdbData.data.imdbID}]

           localStorage.setItem("movies",JSON.stringify(arr))
             const movie = await _api.get(`/Movies/${newId}`);
            setDetails(movie.data)
        }
       
    }


    useEffect(() => { fetchMovieDetails(imdbID, apiKey) }, [imdbID, apiKey])

    return (
        Object.keys(details).length > 0 && (<div className='max-w-[1200px] w-[95%] mx-auto my-10 bg-white p-5 rounded-xl flex flex-col sm:flex-row sm:gap-5 md:gap-10 md:items-center'>
            <img src={details.Poster} className='max-w-[300px] self-center sm:self-start' alt={details.Title} />
            <div>
                <div className='flex flex-col'>
                    <div className='space-y-1 mt-2'>
                        <p className='text-3xl font-extrabold font-serif italic'>{details.Title}</p>
                        <p className='text-sm font-bold'>{`${details.Year} - ${details.Genre} - ${details.Language}`}</p>
                        <p className='text-sm font-extrabold'>{details.Runtime}</p>
                    </div>
                </div>
                <p className='p'>{details.Plot}</p>
                <div className='space-y-1 mt-2'>
                   {details?.userRating === 0 ? <StarRating id={details.id}/> : <StarRating initial={details.userRating} id={details.id}/>} 
                </div>
                <div className='space-y-1 mt-2'>
                    <p className='hidden font-extrabold text-2xl font-serif italic'>Ratings</p>
                    <p className='font-extrabold text-4xl italic'>{details.imdbRating}</p>
                    <p className='text-md font-bold'>{details.imdbVotes} Votes</p>
                </div>
                
                
                <div className="flex flex-col gap-2 mt-3 md:flex-row">
                    {details['Actors']?.split(",").map((actor, index) => (
                        <div
                            key={index}
                            className="bg-[#a3abb2] p-3 text-white font-serif text-md font-extrabold italic rounded-md flex items-center gap-2 "
                        >
                            <RxAvatar />
                            <p>{actor.trim()}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        )

    )
}

export default MovieDetails