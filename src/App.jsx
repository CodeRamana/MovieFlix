import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Wrapper from "../layout/Wrapper";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

const App = () => {

    const router = createBrowserRouter( [{
    path: "/",
    element: <Wrapper/>,
    children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/:imdbID",
                element: <MovieDetails/>
            },
        ]
  }], {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  })

  return (
    <RouterProvider router={router} future={{
      v7_startTransition: true,
    }} />
  );
}

export default App;