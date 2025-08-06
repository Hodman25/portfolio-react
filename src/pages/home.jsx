import imageOne from '../assets/portfolio_img-removebg-preview.png'
import imageTwo from '../assets/ProjectOne.png'
import imageThree from '../assets/ProjectTwo.png'
import imageFour from '../assets/ProjectThree.png'
import hackathon from '../assets/hackathon.jpg'
import seminar from '../assets/seminar.jpg'
import seminar2 from '../assets/seminar2.jpg'
import game from '../assets/gameWeb.png'
import word from '../assets/wordAnalytics.png'
import imageOnee from '../assets/1645a11bcf6ac25fbc29b50c018ea0c3.jpg'

import Project from '../components/project'
import Footer from '../components/footer'
import { NavLink } from 'react-router-dom'

export default function Home(){
  return<>
  
   <div className="w-full  bg-gradient-to-r from-black via-blue-950 to-blue-950 text-white">


  <div className="mt-20  flex sm:flex-row flex-col gap-10 justify-around overflow-hidden ">
  <div className="w-[550px] mt-20">
    <h1 className='font-semibold text-pink-600 text-2xl pb-4'>Hello...</h1>
    <p className='sm:text-3xl text-xl  font-serif font-semibold pb-6 leading-[1.6]'>I`m HOD<span className='text-pink-600'>AN</span> | FrontEnd developer </p>
    <p className='text-[17px]'>I’m a passionate Frontend Developer with a strong interest in building clean, responsive, and user-friendly interfaces. I enjoy turning creative ideas into functional web experiences using modern technologies like HTML, CSS, JavaScript, and React.</p>
    <div className="b">
        
    </div>
  </div>

  <img className='w-[400px] h-[500px] mb-10 sm:scale-[1.1] ' src={imageOne} alt="" />
  </div>

  {/* projects */}
  <div className="mt-20 flex justify-between sm:px-20 ">
    <h1 className=' sm:text-5xl text-3xl font-bold text-pink-700 '>My Projects</h1>
   <NavLink to='/pages' ><button className=' bg-black border-pink-600 border-2 text-pink-600 px-8 py-2 text-2xl font-ser rounded-lg '>View All</button></NavLink> 
  </div>
    <div className='pb-10 sm:ml-10 ml-3 mt-20 flex sm:flex-row flex-col gap-10'>

  <Project title='stream Landing page' image={imageTwo} />
  <Project title='landing page' image={game} />
  <Project title='word Analytics in js' image={word} />
    </div>

{/* events */}

<div className="pb-20">
    <div className="ml-10 mt-6">
        <h1 className=' sm:text-5xl text-3xl font-bold text-pink-700' >Recent Events</h1>

    </div>
    <div className="flex sm:flex-row flex-col">

    <div  style={{backgroundImage: `URL(${hackathon})` }} className="w-[350px] h-[350px] bg-cover bg-no-repeat mt-16 ml-10 rounded-xl  ">
    <div className="bg-black/30 z-10 w-full h-[350px]">
    <div className="text-center pt-64">
    <p className='pb-3 font-serif text-2xl font-medium'>3, feb, 2023</p>
    <h1 className=' text-2xl font-serif font-semibold '>First Hackathon</h1>
    </div>
    </div>
    </div>
   {/* 2 */}

 <div  style={{backgroundImage: `URL(${seminar})` }} className="w-[350px] h-[350px] bg-cover bg-no-repeat mt-16 ml-10 rounded-xl  ">
    <div className="bg-black/30 z-10 w-full h-[350px]">
    <div className="text-center pt-64">
    <p className='pb-3 font-serif text-2xl font-medium'>12, jun, 2020</p>
    <h1 className=' text-2xl font-serif font-semibold '>Seminar</h1>
    </div>
    </div>
    </div>
   

 <div  style={{backgroundImage: `URL(${seminar2})` }} className="w-[350px] h-[350px] bg-cover bg-no-repeat mt-16 ml-10 rounded-xl  ">
    <div className="bg-black/30 z-10 w-full h-[350px]">
    <div className="text-center pt-64">
    <p className='pb-3 font-serif text-2xl font-medium'>23, Aug, 2022</p>
    <h1 className=' text-2xl font-serif font-semibold '>First Hackathon</h1>
    </div>
    </div>
    </div>
   


        </div>
</div>

<div className="mb-10">
  <h1 className='text-4xl font-serif font-semibold ml-8 '>Testimonial</h1>
</div>

  <div className="grid sm:grid-cols-4 sm:ml-0 ml-6">
        <div className="w-[300px] h-[350px] border-2 border-blue-700 rounded-xl mb-10   ">
            <img className='w-[100px] h-[100px]  rounded-full mt-3 ml-24 border-2 border-pink-700  ' src={imageOnee} alt="" />
            <div className="justify-center mt-4 flex gap-2 text-orange-500">
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
            </div>
            <h1 className='text-center mt-3 font-serif text-3xl'>Maryama</h1>
            <p className='ml-3 mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quia, corrupti quod modi facere accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="w-[300px] h-[350px] border-2 border-blue-700 rounded-xl mb-10   ">
            <img className='w-[100px] h-[100px]  rounded-full mt-3 ml-24 border-2 border-pink-700  ' src={imageOne} alt="" />
            <div className="justify-center mt-4 flex gap-2 text-orange-500">
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
            </div>
            <h1 className='text-center mt-3 font-serif text-3xl'>Maryama</h1>
            <p className='ml-3 mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quia, corrupti quod modi facere accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="w-[300px] h-[350px] border-2 border-blue-700 rounded-xl mb-10   ">
            <img className='w-[100px] h-[100px]  rounded-full mt-3 ml-24 border-2 border-pink-700  ' src={imageOnee} alt="" />
            <div className="justify-center mt-4 flex gap-2 text-orange-500">
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
            </div>
            <h1 className='text-center mt-3 font-serif text-3xl'>Maryama</h1>
            <p className='ml-3 mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quia, corrupti quod modi facere accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </div>

        <div className="w-[300px] h-[350px] border-2 border-blue-700 rounded-xl mb-10   ">
            <img className='w-[100px] h-[100px]  rounded-full mt-3 ml-24 border-2 border-pink-700  ' src={imageOne} alt="" />
            <div className="justify-center mt-4 flex gap-2 text-orange-500">
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
                <i className='fa-solid fa-star'></i>
            </div>
            <h1 className='text-center mt-3 font-serif text-3xl'>Maryama</h1>
            <p className='ml-3 mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quia, corrupti quod modi facere accusantium? Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </div>

        

  </div>
  <Footer />
  </div>
  </>

}

