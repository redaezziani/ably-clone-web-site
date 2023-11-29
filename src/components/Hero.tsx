import grid from '../assets/images/grid.svg'
const Hero = () => {
  return (
    <main
    className=" mt-32 relative w-full flex justify-center items-center flex-col gap-5"
    >
        <div className="flex h-80 w-[100%] mt-30 absolute justify-center items-center">
        <img
        className='w-[80%]   aspect-auto md:w-[40%]  absolute '
        src={grid} alt="grid" />
        <div className="w-[24rem] h-[28rem] bg-red-500/30 absolute  filter blur-[400px] rounded-full "></div>
        <div className="w-[24rem] ml-42 h-[28rem] bg-violet-500/10 absolute  filter blur-[400px] rounded-full "></div>
        </div>
        <h1
        className='text-[24rem] relative font-bold text-slate-300/60 text-center'
        >
            Ably 
        </h1>


    </main>
  )
}

export default Hero