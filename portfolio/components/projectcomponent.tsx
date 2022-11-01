export default function Projectcomponent() {
    return (
         <div className=" text-center pt-4 lg:mx-[5%]">
            <div className="flex flex-wrap">
                <div className="max-w-[90%] mx-auto mt-2 rounded-lg md:w-[48%] min-[2500px]:w-[24%]">
                    <h1 className='text-3xl'><a href="https://www.youtube.com/channel/UCZ0lcRhWFgwx0x7qsR-BlsQ" target="#"> My Youtube Channel </a></h1>
                    <a href="https://www.youtube.com/channel/UCZ0lcRhWFgwx0x7qsR-BlsQ" target="#">
                        <video className=" border-2 border-slate-800 mt-2 rounded-lg" playsInline autoPlay muted loop >
                            <source src="/images/youtube.mp4" type="video/mp4" />
                        </video>
                    </a>
                    
                </div>
                <div className="max-w-[90%] mx-auto mt-2 rounded-lg md:w-[48%] min-[2500px]:w-[24%]">
                    <h1 className='text-3xl'><a href="https://raymond.is-a.dev/Pokemon-Memory-Game/" target="#"> Pokemon Memory Game </a></h1>
                    <a href="https://www.youtube.com/channel/UCZ0lcRhWFgwx0x7qsR-BlsQ" target="#">
                        <video className=" border-2 border-slate-800 mt-2 rounded-lg" playsInline autoPlay muted loop >
                            <source src="/images/pokemon.mp4" type="video/mp4" />
                        </video>
                    </a>
                </div>
                <div className="max-w-[90%] mx-auto mt-2 rounded-lg md:w-[48%] min-[2500px]:w-[24%]">
                    <h1 className='text-3xl'><a href="https://raymond.is-a.dev/Beluga-Theme-Store/" target="#"> Yeezy Beluga Theme Store </a></h1>
                    <video className=" border-2 border-slate-800 mt-2 rounded-lg" playsInline autoPlay muted loop >
                        <source src="/images/beluga.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="max-w-[90%] mx-auto mt-2 rounded-lg md:w-[48%] min-[2500px]:w-[24%]">
                    <h1 className='text-3xl'><a href="https://raymond.is-a.dev/Battleship-Game/" target="#"> Battleship </a></h1>
                    <video className=" border-2 border-slate-800 mt-2 rounded-lg" playsInline autoPlay muted loop >
                        <source src="/images/battleship.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}