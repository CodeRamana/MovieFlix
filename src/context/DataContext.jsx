import { createContext, useContext, useReducer, useState } from "react";
import searchReducer from "../reducers/searchReducer";
import pageNavReducer from "../reducers/pageNavReducer";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [search, dispatch] = useReducer(searchReducer, {
    search: "",
    category: "",
  });
  const [page, pageDispatch] = useReducer(pageNavReducer, {
    currentPage: 1,
    totalPage: 1,
  });
  const [details, setDetails] = useState({});

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
        pageDispatch
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => useContext(DataContext);

export default useDataContext;
