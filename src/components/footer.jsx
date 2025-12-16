import { NavLink } from "react-router-dom";

export default function Footer(){
    return   <div className="w-full  bg-gradient-to-r from-black via-blue-950 to-blue-950 text-white">

    {/* <div className="bg-white/5 w-full sm:h-40 h-32 grid sm:grid-cols-3 grid-cols-1   pt-10 overflow-hidden "> */}
    <div className="bg-white/5 w-full sm:h-32 h-32 flex justify-between sm:px-10 items-center pb-10    pt-10 overflow-hidden ">
    
    <div className="w-[500px]  ">
        <h1 className="text-4xl font-serif text-white font-semibold pb-6 pt-10">HOD<span className="text-pink-600">AN</span></h1>
    </div>

    <div className="sm:ml-0 ml-0 pb-0">
        <h1 className="sm:text-3xl text-xl font-serif  pb-4 text-pink-700 font-semibold ">Social Media</h1>
        <div className="text-2xl flex gap-2 ml-3">
             <a href="https://github.com/Hodman25">  <i className="fa-brands fa-github"></i></a>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
           <a href="https://wa.link/4v6ur8"> <i className="fa-brands fa-whatsapp"></i></a>
        <a href="mailto:hodmanmaxamed84@gmail.com"><i className="fa-solid fa-envelope"></i></a>
        </div>
    </div>
    </div>
    </div>
}