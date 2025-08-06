import Footer from "../components/footer";
import Header from "../components/header";
// Hello test

export default function Contact (){
    return<>
<Header />
     <div className="mb-20 overflow-hidden ">
        <h2 class="text-2xl font-bold mb-5 text-center mt-6 ">Get In Touch</h2>
     <div className="">
        <form className="max-w-[300px] sm:max-w-[550px]  mx-auto bg-white/5 p-8 rounded-lg shadow-lg shadow-blue-700">
            <input type="text" className="bg-white/5 w-full px-4 py-3 border border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparen" placeholder="Name"/>
            <input type="email" className="bg-white/5 w-full px-4 mt-4 py-3 border border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparen" placeholder="Email"/>
            <textarea name="" className="bg-white/5 w-full px-4 py-3 mt-4 border border-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent min-h-[150px]" placeholder="Masseg" ></textarea>
         <button className="bg-blue-700 mt-6 ml-60 text-white px-10 py-3 rounded-md font-medium transition-all duration-300 hover:bg-blue-500 hover:-translate-y-1 hover:shadow-md inline-flex items-center gap-2 -ml-0 ">Submit</button>
        </form>
        </div>
     </div>

<Footer />
    </>
}
