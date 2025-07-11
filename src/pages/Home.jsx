import SearchBar from "../components/SearchBar";
import cinema from  '../assets/cinema.png';
import collection from  '../assets/movies.png';
import { useState } from "react";

const Home = () => {
    
    return (
        <main>
            <img src={cinema} className="mx-auto object-cover max-w-[1200px] w-[100%] h-[300px] sm:w-[90%] sm:my-5 sm:rounded-md" alt="Cinema" />
            <SearchBar />
            {
                movies.length === 0 &&(
                    <div className="flex flex-col items-center justify-center gap-15 max-w-[1200px] w-[90%] mx-auto my-5 sm:flex-row">
                        <img src={collection} alt="" className="order-2 w-full rounded-md shadow-xl shadow-[#a3abb2]  sm:order-1 sm:w-[350px] md:w-[500px]"/>
                        <div className="flex flex-col gap-5 flex-wrap order-1 sm:order-2">
                            <p className="text-white text-4xl font-extrabold tracking-normal font-serif">Your next favorite movie is just a search away!</p>
                            <p className="text-[#a3abb2] text-lg font-extrabold tracking-normal font-serif">Explore thousands of titles and discover your next cinematic adventure.</p>
                        </div>
                    </div>
                )
            }
        </main>
    );

}

export default Home;