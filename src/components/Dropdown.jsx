import useDataContext from "../context/DataContext";

const Dropdown = ({ obj }) => {
    
    const {open, setOpen,handleCategory } = useDataContext();
    const handleOpen = (type) => {
        if (open === type) {
            setOpen(null);
        } else {
            setOpen(null);
            setTimeout(() => {
                setOpen(type);
            }, 50);
        }
    };

    return (
        <div className="grow-0">
            <p className='inline-block px-3 py-2 rounded-md max-w-[200px] w-full font-[poppins] font-bold bg-[#2c3135] text-[#a3abb2] ' onClick={() => handleOpen(obj?.title.toLowerCase())}>{obj?.title === "Category" ? "Genre" : obj?.title }</p>
            <div name={obj?.title.toLowerCase()} id={obj?.title.toLowerCase()} className={(open === obj?.title.toLowerCase() ? 'block' : 'hidden') + ' focus:outline-none px-5 py-2 absolute text-md font-[poppins] font-bold max-w-[200px] h-[250px] overflow-y-scroll z-999 bg-white'}>
                {obj?.options.map((item,index) => (<div key={index} onClick={(e) => handleCategory(item.value, obj?.title.toLowerCase())} value={item.value}>{item.field}</div>))}
            </div>
        </div>
    )
}

export default Dropdown