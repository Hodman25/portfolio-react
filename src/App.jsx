import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import About from "./pages/about";
import Contact from "./pages/contact";
import View from "./pages/view";

export default function App(){
  return <>
 <div className="w-full  bg-gradient-to-r from-black via-blue-950 to-blue-950 text-white"> 
  <Header />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/pages" element={<View />} />
</Routes>
 </div>
  </>
}