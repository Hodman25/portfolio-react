import imageOne from '../assets/portfolio_img-removebg-preview.png'
import imageFour from '../assets/tasbeh.png'
import hackathon from '../assets/hackathon.jpg'
import seminar from '../assets/seminar.jpg'
import game from '../assets/gameWeb.png'
import word from '../assets/wordAnalytics.png'
import imageOnee from '../assets/1645a11bcf6ac25fbc29b50c018ea0c3.jpg'
import vsCode from '../assets/vs code.png'
import figma from '../assets/Figma-logo.svg-removebg-preview.png'
import mee from '../assets/mee.jpg'
import bgremove from '../assets/portfolio_img-removebg-preview.png'
// import bgremove from '../assets/bg-remove.png'
import imageThree from '../assets/projectTwo.png'
// import medical from '../assets/medical.png'
import ecommerce from '../assets/ecomerce.png'
import skillHub from '../assets/skillHub.png'
// import skillHub from '../assets/skillHub.png'


import Project from '../components/project'
import Footer from '../components/footer'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import { MdMarkEmailRead } from 'react-icons/md'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'

export default function Home(){
  return<>
  <Header/>
   <div className="w-full  bg-gradient-to-r from-black via-blue-950 to-blue-950 text-white">

<section id='home'>


  <div className="mt-20  flex sm:flex-row flex-col gap-10 justify-around overflow-hidden ">
  <div className="w-[550px] mt-10">
    <h1 className='font-semibold text-pink-600 text-2xl pb-4'>Hello...</h1>
    <p className='sm:text-3xl text-xl  font-serif font-semibold pb-6 leading-[1.6]'>I`m HOD<span className='text-pink-600'>AN</span> | Full-Stack developer </p>
    <p className='text-[17px] md:w-[550px] w-[350px]  md:ml-0 ml-2'>Hi, I’m a Full-Stack Developer who enjoys building clean, functional, and creative web apps from front to back.</p>
    <div className="mt-10 flex gap-6">
        <button className='bg-pink-600 px-10 py-2 rounded-3xl hover:bg-pink-500 shadow-md hover:shadow-fuchsia-500 text-xl '><a href="#projects">My projects</a></button>
        {/* <button className='bg-transparent border-2 border-blue-800 px-8 py-2 rounded-3xl text-xl'><a href="">DownLoad CV <i className='fa-solid fa-download text-xl'></i></a></button> */}
    </div>
  </div>

  <img className='w-[240px] md:h-[400px] md:ml-0 ml-4  mb-10 md:scale-150  ' src={bgremove} alt="" />
  </div>
</section>




  {/* projects */}

<section id='projects'>



  <div className="mt-20 flex justify-between sm:px-20 ">
    <h1 className=' sm:text-5xl text-3xl font-bold text-pink-700 '>My Projects</h1>
   <NavLink to='/pages' ><button className=' bg-black border-pink-600 border-2 text-pink-600 px-8 py-2 text-2xl font-ser rounded-lg '>View All</button></NavLink> 
  </div>
    <div className='pb-10 sm:ml-10 ml-3 mt-20 flex sm:flex-row flex-col gap-10'>

  <Project title='E-commerce' image={ecommerce} link='https://e-commerce-three-black-36.vercel.app/' />
  <Project title='E-Learning platform' image={skillHub} link='https://e-learning-gnck3dje0-ancaams-projects.vercel.app/' />
  <Project title='word Analytics in js' image={word} link='https://word-analytics-seven-ruddy.vercel.app/' />
    </div>
</section>
{/* about me */}



  <div className="pb-0 pt-10 overflow-hidden ">
   
<section id='about'>
 <div className="text-center sm:text-4xl text-2xl  mt-0 font-bold font-serif bg-gradient-to-l from-pink-600 via-blue-500 to-pink-700 bg-clip-text text-transparent   ">
      <h1 className='-mt-10'>ABOUT ME</h1>
    </div>
    <div className="flex sm:flex-row flex-col justify-center gap-10">
    <img className='md:w-[250x] w-[250px] sm:h-[450px] h-[500px] rounded-full border-2 border-blue-800 md:ml-20 ml-10  ' src={bgremove} alt="" />
    <div className="md:w-[600px] w-[350px] md:ml-0 ml-2 mt-40 text-xl">
      <h1> Hi, I’m <i className='font-semibold'> HOD<span className='text-pink-600'>AN</span>, </i>a passionate Full-Stack Developer with a strong focus on building modern, responsive, and user-friendly web applications. I enjoy turning ideas into functional digital solutions by combining powerful backend logic with sleek and interactive frontend designs.

I specialize in technologies like React, Node.js, Express, and MongoDB


</h1>
    </div>
    </div>
</section>

    {/* skils */}
    <section id='skills'>

  
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
      <h1 className='text-3xl font-serif font-semibold'>Node js </h1>
    </div>

    <div className="bg-tranparent shadow-2xl shadow-blue-600 w-[300px] h-20 text-center pt-6 border-blue-700 border-2 rounded-lg scale-[1.1]  transition-all duration-500 ">
      <h1 className='text-3xl font-serif font-semibold'>Epress</h1>
    </div>

    <div className="bg-tranparent shadow-2xl shadow-blue-600 w-[300px] h-20 text-center pt-6 border-blue-700 border-2 rounded-lg scale-[1.1]  transition-all duration-500 ">
      <h1 className='text-3xl font-serif font-semibold'>MongoDB</h1>
    </div>

      </div>
    </div>
    </section>


    {/* tools */}
    <div className="mt-20 text-left ml-20  justify-center ">
      <h1 className='text-3xl sm:text-5xl font-serif font-bold text-blue-600 sm:ml-[24%]  '> Tools</h1>
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

    {/* <div className="bg-transparent   text-center flex gap-3 items-center ">
      <img className='h-[100px]' src={figma} alt="" />
      <h1 className='pt-3 text-2x sm:text-4xl font-serif '>Figma</h1>
    </div> */}
  </div>
  </div>
  
<section id='contact'>
    <div id='contact' className='flex justify-center mt-10 h-s items-center'>
      <div className="">
        <p className='text-3xl md:text-4xl ml-10  '>contact Me</p>
                  <div className="bg-blue-600 h-1 w-20 mt-2 mb-6 ml-10 ">
          </div>
          {/* contact */}
        <div className="flex gap-10 text-3xl ml-10 mb-10">

          <div className="bg-slate-700 p-6 rounded-lg">
          <a href='mailto:hodmanmaxamed84%40gmail.com?subject=hodon&body=' target='_blank' class='btn btn-primary'>

          <MdMarkEmailRead className='text-3xl' />

          </a>
        
          </div>

          <div className="bg-slate-700 p-6 rounded-lg">
          <a href="https://github.com/Hodman25">
            <FaGithub  className='text-3xl'/>
          </a>
        
          </div>
         
        
         <div id='whatsapp' className="bg-slate-700 p-6 rounded-lg">
      <a  href="https://wa.link/o5gflb">
<FaWhatsapp className='text-3xl' />

          </a>
         </div>
          
        </div>
      </div>
    </div>


 {/* <div className="mb-20 overflow-hidden ">
        <h2 class="text-2xl font-bold mb-5 text-center mt-6 ">Get In Touch</h2>
     <div className="">
        <form className="max-w-[300px] sm:max-w-[550px]  mx-auto bg-white/5 p-8 rounded-lg shadow-lg shadow-blue-700">
            <input type="text" className="bg-white/5 w-full px-4 py-3 border border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparen" placeholder="Name"/>
            <input type="email" className="bg-white/5 w-full px-4 mt-4 py-3 border border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparen" placeholder="Email"/>
            <textarea name="" className="bg-white/5 w-full px-4 py-3 mt-4 border border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent min-h-[150px]" placeholder="Masseg" ></textarea>
         <button className="bg-blue-700 mt-6 ml-60 text-white px-10 py-3 rounded-md font-medium transition-all duration-300 hover:bg-blue-500 hover:-translate-y-1 hover:shadow-md inline-flex items-center gap-2 ">Submit</button>
        </form>
        </div>
     </div> */}
</section>
  
  <Footer />
  </div>
  </>

}

