import {createContext, useContext, useReducer } from "react";
import searchReducer from "../reducers/searchReducer";

const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [movies,setMovies] = useState([]);
    const [search , dispatch] = useReducer(searchReducer,{search:"",category:""});
    return(
        <DataContext.Provider value={{movies,setMovies,search,dispatch}}>
            {children}
        </DataContext.Provider>
    );
}

const useDataContext = () =>{
    return useContext(DataContext);
}

export default useDataContext;