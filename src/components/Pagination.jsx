import { PiGreaterThanLight } from "react-icons/pi";
import { PiLessThanLight } from "react-icons/pi";
import useDataContext from "../context/DataContext";

const Pagination = () => {
    const {page,pageDispatch} = useDataContext()
    return (
        <div className="max-w-[1200px] w-[90%]  mb-5 flex items-center justify-end gap-5 sm:mb-10 sm:w-full">
            <button className="bg-white p-1 rounded-full md:p-3" onClick={()=>pageDispatch({type:"PREVIOUS_PAGE"})}><PiLessThanLight/></button>
            <p className="text-white"><span className="text-md font-extrabold">{page['currentPage'] || 1}</span> of <span className="text-md font-extrabold">{page['totalPage'] || 1}</span></p>
            <button className="bg-white p-1 rounded-full md:p-3" onClick={()=>pageDispatch({type:"NEXT_PAGE"})}><PiGreaterThanLight />
            </button>
        </div>
    )
}

export default Pagination