export default function Project(props){
    return <>
  <div className="w-[380px] h-[380px] bg-white/5 shadow-xl shadow-black hover:scale-[1.1] transition-all duration-500 rounded-xl  ">
    <img className='w- h-[300px]  ' src={props.image} alt="" />
        <p className='font-serif pt-8 pl-4 text-2xl '>{props.title}</p>
    </div>
    </>
}