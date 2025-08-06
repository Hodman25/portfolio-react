import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header(){

      const [count, setCount] = useState(false)
   const handleClick = () => {
    if(count === false){
          setCount(true)
    } else{
      setCount(false)
    }
   }

    return   <div className="w-full  bg-gradient-to-r from-black via-blue-950 to-blue-950 text-white">

    <div className="flex justify-between sm:px-32  px-10 py-4 bg-white/5 text-white overflow-hidden ">
        <h1 className="text-3xl font-bold font-serif ">HOD<span className="text-pink-700">AN</span></h1>
        <i style={{display: count === true ? 'block' : ''}} onClick={handleClick} className="fa-solid fa-bars sm:hidden text-3xl"></i>
        <ul className="sm:flex gap-10 text-2xl font-serif hidden ">
          <NavLink to='/'>  <li>Home</li></NavLink>
         <NavLink to='/about'> <li>About</li></NavLink>
        <NavLink to='/contact'><li>Contact</li> </NavLink>
           
        </ul>
    </div>

        {/* mobile */}
            <div  style={{display: count === true ? 'block' : ''}} className=" hidden bg-gradient-to-r from-black via-blue-950 to-blue-950 text-white  sm:hidden bg-blue-800 w-full h-[150px]  text-white  sm:ml-0  text-right overflow-hidden ">
                <ul className="text-center space-y-10 mt-6  ">
                    <NavLink to='/'>  <li>Home</li></NavLink>
         <NavLink to='/about'> <li>About</li></NavLink>
        <NavLink to='/contact'><li>Contact</li> </NavLink>
                </ul>
            </div>

    </div>
}