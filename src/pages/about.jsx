import imageOnee from '../assets/1645a11bcf6ac25fbc29b50c018ea0c3.jpg'
import vsCode from '../assets/vs code.png'
import figma from '../assets/Figma-logo.svg-removebg-preview.png'
import Header from '../components/header'
import Footer from '../components/footer'


export default function About(){
  return   <div className="w-full  bg-gradient-to-r from-black via-blue-950 to-blue-950 text-white">
  <div className="pb-20 pt-10 overflow-hidden ">
    <div className="text-center sm:text-4xl text-2xl  font-bold font-serif bg-gradient-to-r from-pink-600 via-blue-500 to-pink-700 bg-clip-text text-transparent   ">
      <h1>ABOUT ME</h1>
    </div>
    <div className="flex sm:flex-row flex-col justify-center gap-10">
    <img className='w-[250px] h-[250px] rounded-full border-2 border-blue-800 ml-20  ' src={imageOnee} alt="" />
    <div className="w-[600px] mt-10">
      <h1>I’m a passionate Frontend Developer with a strong eye for design and detail. I specialize in building responsive, user-friendly web interfaces using modern tools like React, Tailwind CSS, and JavaScript. My goal is always to turn ideas into smooth digital experiences that users enjoy.
        With every project, I focus on clean code, performance, and accessibility. Whether I’m collaborating in a team or working independently, I love solving problems and constantly improving my skills to stay ahead in the ever-evolving world of web development.


</h1>
    </div>
    </div>

    {/* skils */}
    <div className="mt-10">
      <h1 className='text-center text-2xl sm:text-5xl font-serif font-semibold text-pink-700  '>My Skills</h1>
      <div className=" ml-6 mt-14 grid sm:grid-cols-3 gap-10  ">
    <div className="bg-tranparent shadow-2xl shadow-blue-600 w-[300px] h-20 text-center pt-6 border-blue-700 border-2 rounded-lg scale-[1.1] transition-all duration-500  ">
      <h1 className='text-3xl font-serif font-semibold'>HTML & CSS</h1>
    </div>

    <div className="bg-tranparent shadow-2xl shadow-blue-600 w-[300px] h-20 text-center pt-6 border-blue-700 border-2 rounded-lg scale-[1.1]  transition-all duration-500 ">
      <h1 className='text-3xl font-serif font-semibold'>Tailwind Css</h1>
    </div>

    <div className="bg-tranparent shadow-2xl shadow-blue-600 w-[300px] h-20 text-center pt-6 border-blue-700 border-2 rounded-lg scale-[1.1] transition-all duration-500  ">
      <h1 className='text-3xl font-serif font-semibold'>JavaScript</h1>
    </div>

    <div className="bg-tranparent shadow-2xl shadow-blue-600 w-[300px] h-20 text-center pt-6 border-blue-700 border-2 rounded-lg scale-[1.1] transition-all duration-500  ">
      <h1 className='text-3xl font-serif font-semibold'>React</h1>
    </div>

    <div className="bg-tranparent shadow-2xl shadow-blue-600 w-[300px] h-20 text-center pt-6 border-blue-700 border-2 rounded-lg scale-[1.1] transition-all duration-500  ">
      <h1 className='text-3xl font-serif font-semibold'>Graphic design</h1>
    </div>

    <div className="bg-tranparent shadow-2xl shadow-blue-600 w-[300px] h-20 text-center pt-6 border-blue-700 border-2 rounded-lg scale-[1.1]  transition-all duration-500 ">
      <h1 className='text-3xl font-serif font-semibold'>Figma</h1>
    </div>

      </div>
    </div>

    {/* tools */}
    <div className="mt-20 text-left ml-20  justify-center ">
      <h1 className='text-3xl sm:text-5xl font-serif font-bold text-blue-600 sm:ml-[24%]  '>My Tools</h1>
    </div>
  <div className="mt-20 flex flex-col  gap-10 ml-32 sm:ml-[30%]  ">
    <div className="bg-transparent w-80 h-20 text-center flex gap-3 ">
      <i className='fa-brands fa-github text-6xl'></i>
      <h1 className='pt-3 text-2x sm:text-4xl font-serif '>Git & GitHub</h1>
    </div>

    <div className="bg-transparent w-80 h-20 text-center flex gap-6 items-center ">
      <img className='h-[100px]' src={vsCode} alt="" />
      <h1 className='pt-3 text-2x sm:text-4xl font-serif '>Vs Code</h1>
    </div>

    <div className="bg-transparent   text-center flex gap-3 items-center ">
      <img className='h-[100px]' src={figma} alt="" />
      <h1 className='pt-3 text-2x sm:text-4xl font-serif '>Figma</h1>
    </div>
  </div>
  </div>
  <Footer />
  </div>
}