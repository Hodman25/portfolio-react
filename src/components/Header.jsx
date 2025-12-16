import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header(){

      const [count, setCount] = useState(false)
   const handleClick = () => {
    if(count === false){
          setCount(true)
    } else{
      setCount(false)
    }
   }

   const handletarget = (section) =>{
    const element = document.getElementById(section);
    if(element){
        element.scrollIntoView({behavior:'smooth'});
        setCount(false)
    }
   }

    return   <div className="w-full  bg-gradient-to-r from-black via-blue-950 to-blue-950 text-white">

    <div className="flex justify-between sm:px-32  px-10 py-4 bg-white/5 text-white overflow-hidden ">
        <h1 className="text-3xl font-bold font-serif ">HOD<span className="text-pink-700">AN</span></h1>
        <i style={{display: count === true ? 'block' : ''}} onClick={handleClick} className="fa-solid fa-bars sm:hidden text-3xl"></i>
        <ul className="sm:flex gap-10 text-2xl font-serif hidden ">
       
       <li><Link     >Home</Link></li>
       <li><Link onClick={()=> handletarget("about")} >about</Link></li>
       <li><Link onClick={()=> handletarget("projects")} >projects</Link></li>
       <li><Link onClick={()=> handletarget("skills")} >Skills</Link></li>
       <li><Link onClick={()=> handletarget("contact")} >Contact</Link></li>
      
           
        </ul>
        {/* <ul className="sm:flex gap-10 text-2xl font-serif hidden ">
          <NavLink to='/'>  <li>Home</li></NavLink>
         <NavLink to='/about'> <li>About</li></NavLink>
        <NavLink to='/contact'><li>Contact</li> </NavLink>
           
        </ul> */}
    </div>

        {/* mobile */}
            <div style={{display: count === true ? 'block' : ''}}  className=" hidden bg-gradient-to-r from-black via-blue-950 to-blue-950 text-whi sm:hidden bg-blue-800 w-full h-[150px]  text-white  sm:ml-0  text-right overflow-hidde ">
                <ul className="text-center space-y-3 mt-6  ">
         <li><Link onClick={()=> handletarget("home")} >Home</Link></li>
         <li><Link onClick={()=> handletarget("about")} >about</Link></li>
            <li><Link onClick={()=> handletarget("projects")} >projects</Link></li>
            <li><Link onClick={()=> handletarget("skills")} >Skills</Link></li>
            <li><Link onClick={()=> handletarget("contact")} >Contact</Link></li>
                    {/* <NavLink to='/'>  <li>Home</li></NavLink>
         <li>About</li>
        <li>Contact</li> */}
                </ul>
            </div>

    </div>
}

export default Header