export default function Project(props){
    return <>
  <div className="w-[380px] h-[450px] bg-white/5 shadow-xl shadow-black hover:scale-[1.1] transition-all duration-500 rounded-xl  ">
    <img className='w- h-[300px]  ' src={props.image} alt="" />
        <p className='font-serif pt-8 pl-4 text-2xl '>{props.title}</p>
        <div className="mt-6 ml-10">
        <button className="bg-pink-600 px-10  py-2 text-xl rounded-xl"><a href={props.link}>view my work</a></button>

        </div>
    </div>
    </>
}