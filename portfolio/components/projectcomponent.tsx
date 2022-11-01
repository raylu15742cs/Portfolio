export default function Projectcomponent() {
    return (
         <div className=" text-center pt-4 lg:mx-[5%]">
            <h1 className='text-3xl'>Most Recent Projects</h1>
            <div className="flex flex-wrap">
                <div className="max-w-[90%] mx-auto mt-2 rounded-lg md:w-[48%]">
                    <h1 className='text-3xl'>My Youtube Channel</h1>
                    <video className=" border-2 border-slate-800 mt-2 rounded-lg" playsInline autoPlay muted loop >
                        <source src="/images/battleship.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="max-w-[90%] mx-auto  mt-2 rounded-lg md:w-[48%]">
                    <h1 className='text-3xl'>Pokemon Memory Game</h1>
                    <video className="max-w-[90%] mx-auto border-2 border-slate-800 mt-2 rounded-lg md:w-[48%]" playsInline autoPlay muted loop >
                        <source src="/images/pokemon.mp4" type="video/mp4" />
                    </video>
                </div>
                <div>
                    <h1 className='text-3xl'>Yeezy Beluga Theme Store</h1>
                    <video className="max-w-[90%] mx-auto border-2 border-slate-800 mt-2 rounded-lg md:w-[48%]" playsInline autoPlay muted loop >
                        <source src="/images/beluga.mp4" type="video/mp4" />
                    </video>
                </div>
                <div>
                    <h1 className='text-3xl'>Battleship Replica</h1>
                    <video className="max-w-[90%] mx-auto border-2 border-slate-800 mt-2 rounded-lg md:w-[48%]" playsInline autoPlay muted loop >
                        <source src="/images/battleship.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}