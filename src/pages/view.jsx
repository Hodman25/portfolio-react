import Project from "../components/project";
import imageThree from '../assets/projectTwo.png'
import imageFour from '../assets/tasbeh.png'
import calculator from '../assets/calculator.png'
import clock from '../assets/clock.png'
import stream from '../assets/stream.png'
import Footer from "../components/footer";
import Header from "../components/Header";
import greenMini from '../assets/greenMind.png'

export default function View(){
    return <>
    <Header/>
      <div className='pb-10 sm:ml-10 ml-3 mt-20  grid sm:grid-cols-3 grid-cols-1  gap-10'>
       <Project title='Clock Project' image={clock} link='https://clock-beryl-six.vercel.app/' />
      <Project title='Tourist Landing page' image={imageThree} />
      <Project title='Stream Landing page' image={stream} link='https://stream-web-ilbv.vercel.app/' />
      <Project title='calculator' image={calculator} />
      <Project title='small-flower shop' image={greenMini} link='https://plant-e-comerce-p45jeiw6t-ancaams-projects.vercel.app/' />
      <Project title=' Tabeeh project' image={imageFour} />
        </div>

        <Footer />
    </>
}