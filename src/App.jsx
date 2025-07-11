import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Home from "./pages/home";

const App = () => {
  return (
    <header className="bg-[#131416] font-[poppins]">
      <NavBar />
      <Home/>
    </header>
  );
}

export default App;