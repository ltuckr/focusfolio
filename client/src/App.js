import { Route, Routes } from "react-router-dom";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";
import Portfolio from "./pages/portfolio";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import NavBar from "./components/navbar";
import Footer from "./components/footer";


 export default function App(){
  return(
    <>
   <NavBar />
   <Routes>
   <Route path="/login" element={<Login />} />
   <Route path="/signup" element={<Signup />} />
   <Route path="/" element={<Home />} />
   <Route path="/portfolio" element={<Portfolio />} />
   <Route path="/gallery" element={<Gallery />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/cart" element={<Cart />} />
   </Routes>
   <Footer />
    </>
  )
}