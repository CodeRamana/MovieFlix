import { Outlet } from "react-router"
import NavBar from "../src/components/NavBar"

const Wrapper = () => {
  return (
   <header className="font-[poppins]">
     <NavBar />
    <Outlet/>
   </header>
  )
}

export default Wrapper