import { IoSearchOutline } from "react-icons/io5";
const SearchBar = () =>{

    return (
        <div className="max-w-[1200px] mx-auto my-5 p-5 ">
            <form className="flex relative">
                <input type="text" className="text-[#a3abb2] bg-[#2c3135] text-lg grow-1 rounded-md px-2 py-2.5 pl-12 focus:outline-none focus:inset-ring-2 " placeholder="Search for a movie" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <IoSearchOutline className="text-[#a3abb2] absolute top-2.5 left-3 text-2xl font-bold"/>
            </form>
            <div className="flex gap-2.5 mt-2.5">
                <button className={category === "" ? "text-[#2c3135] bg-white px-4 py-3 rounded-md":"text-white bg-[#2c3135] px-4 py-3 rounded-md"} onClick={()=>setCategory("")}>All</button>
                <button className={category === "movies" ? "text-[#2c3135] bg-white px-4 py-3 rounded-md":"text-white bg-[#2c3135] px-4 py-3 rounded-md"} onClick={()=>setCategory("movies")}>Movies</button>
                <button className={category === "series" ? "text-[#2c3135] bg-white px-4 py-3 rounded-md":"text-white bg-[#2c3135] px-4 py-3 rounded-md"} onClick={()=>setCategory("series")}>Series</button>
            </div>
        </div>
    );
}

export default SearchBar;