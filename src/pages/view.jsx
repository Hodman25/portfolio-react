import Project from "../components/project";
import imageThree from '../assets/projectTwo.png'
import imageFour from '../assets/tasbeh.png'
import calculator from '../assets/calculator.png'
import clock from '../assets/clock.png'
import stream from '../assets/stream.png'
import medical from '../assets/medical.png'
import Footer from "../components/footer";
import Header from "../components/Header";
export default function View(){
    return <>
    <Header/>
      <div className='pb-10 sm:ml-10 ml-3 mt-20  grid sm:grid-cols-3 grid-cols-1  gap-10'>
       <Project title='Clock Project' image={clock}  />
      <Project title='Tourist Landing page' image={imageThree} />
      <Project title='Landing page' image={stream} />
      <Project title='calculator' image={calculator} />
      <Project title='medical Landing page' image={medical} />
      <Project title=' Tabeeh project' image={imageFour} />
        </div>

        <Footer />
    </>
}