export default function Projectcomponent() {
    return (
         <div className=" text-center pt-4">
            <h1 className='text-3xl'>Projects</h1>
            <div className="flex flex-wrap">
                <video className="max-w-[90%] mx-auto border-2 border-slate-800 mt-2 rounded-lg md:w-[30%]" playsInline autoPlay muted loop >
                <source src="/images/pokemon.mp4" type="video/mp4" />
            </video>
            <video className="max-w-[90%] mx-auto border-2 border-slate-800 mt-2 rounded-lg md:w-[30%]" playsInline autoPlay muted loop >
                <source src="/images/beluga.mp4" type="video/mp4" />
            </video>
            <video className="max-w-[90%] mx-auto border-2 border-slate-800 mt-2 rounded-lg md:w-[30%]" playsInline autoPlay muted loop >
                <source src="/images/battleship.mp4" type="video/mp4" />
            </video>
            </div>
        </div>
    )
}