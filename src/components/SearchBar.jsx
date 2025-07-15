import { IoSearchOutline } from "react-icons/io5";
import useDataContext from "../context/DataContext";
const SearchBar = () =>{
 const {search,dispatch} = useDataContext();
    return (
        <div className="max-w-[1200px] mx-auto my-5 p-5 ">
            <form className="flex relative">
                <input type="text" className="text-[#a3abb2] bg-[#2c3135] text-lg grow-1 rounded-md px-2 py-2.5 pl-12 focus:outline-none focus:inset-ring-2 " placeholder="Search for a movie" value={search['search']} onChange={(e)=>dispatch({type:"ADDSEARCH", payload: e.target.value})}/>
                <IoSearchOutline className="text-[#a3abb2] absolute top-2.5 left-3 text-2xl font-bold"/>
            </form>
            <div className="flex gap-2.5 mt-2.5">
                <button className={search["category"] === "" ? "text-[#2c3135] bg-white px-4 py-3 rounded-md":"text-white bg-[#2c3135] px-4 py-3 rounded-md"} onClick={()=>dispatch({type:"ADDCATEGORY", payload: ""})}>All</button>
                <button className={search["category"] === "movie" ? "text-[#2c3135] bg-white px-4 py-3 rounded-md":"text-white bg-[#2c3135] px-4 py-3 rounded-md"} onClick={()=>dispatch({type:"ADDCATEGORY", payload: "movie"})}>Movies</button>
                <button className={search["category"] === "series" ? "text-[#2c3135] bg-white px-4 py-3 rounded-md":"text-white bg-[#2c3135] px-4 py-3 rounded-md"} onClick={()=>dispatch({type:"ADDCATEGORY", payload: "series"})}>Series</button>
            </div>
        </div>
    );
}

export default SearchBar;