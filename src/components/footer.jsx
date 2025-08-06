import { NavLink } from "react-router-dom";

export default function Footer(){
    return   <div className="w-full  bg-gradient-to-r from-black via-blue-950 to-blue-950 text-white">

    <div className="bg-white/5 w-full sm:h-72 h-screen grid sm:grid-cols-3 grid-cols-1   pt-10 overflow-hidden ">
    
    <div className="w-[500px] ml-10 pb-10 ">
        <h1 className="text-2xl font-serif text-pink-600 font-semibold pb-6 pt-10">My Portfolio</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, illum? Lorem ipsum dolor sit.</p>
    </div>

    <div className="pb-10 sm:ml-32 ml-20 ">
        <h1 className="text-2xl font-semibold pb-4">Quick Links</h1>
        <ul className="text-xl ml-3 leading-[1.7]" >
           <NavLink to='/'>  <li>Home</li></NavLink>
         <NavLink to='/about'> <li>About</li></NavLink>
        <NavLink to='/contact'><li>Contact</li> </NavLink>
        </ul>
    </div>

    <div className="sm:ml-0 ml-10 pb-10">
        <h1 className="text-3xl font-serif  pb-4 text-pink-700 font-semibold ">Social Media</h1>
        <div className="text-2xl flex gap-2 ml-3">
             <a href="https://github.com/Hodman25">  <i className="fa-brands fa-github"></i></a>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
           <a href="https://wa.link/4v6ur8"> <i className="fa-brands fa-whatsapp"></i></a>
        <a href="http://hodmxmd925@gmail.com"><i className="fa-solid fa-envelope"></i></a>
        </div>
    </div>
    </div>
    </div>
}