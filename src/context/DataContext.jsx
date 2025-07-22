import { createContext, useContext, useReducer, useState } from "react";
import searchReducer from "../reducers/searchReducer";
import pageNavReducer from "../reducers/pageNavReducer";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [open, setOpen] = useState(null);
  const [search, dispatch] = useReducer(searchReducer, {
    search: "",
    category: "",
    year: ""
  });
  const [page, pageDispatch] = useReducer(pageNavReducer, {
    currentPage: 1,
    totalPage: 1,
  });
  const [details, setDetails] = useState({});

 const handleCategory = (data, title) => {
        switch (title) {
            case "category": {
                dispatch({type:"ADDCATEGORY", payload: data})
                break;
            }
            case "year": {
                dispatch({ type: "ADDYEAR", payload: data })
                break;
            }
        }

        setOpen(null)
    }

  return (
    <DataContext.Provider
      value={{
        movies,
        setMovies,
        search,
        dispatch,
        details,
        setDetails,
        page,
        pageDispatch,
        open, setOpen,handleCategory
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => useContext(DataContext);

export default useDataContext;
