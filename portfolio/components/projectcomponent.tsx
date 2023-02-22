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
                    <p className="pt-2"> &#129391; My favorite dish to make is cold smoked salmon since I can give my bagel a huge portion of that delicious goodness &#129391;</p>
                </div>
                <div className="max-w-[90%] mx-auto mt-2 rounded-lg md:w-[48%] min-[2500px]:w-[24%]">
                    <h1 className='text-3xl'><a href="https://studibetterfront.onrender.com/" target="#"> Battleship </a></h1>
                    <a href="https://studibetterfront.onrender.com/" target="#">
                        <video className=" border-2 border-slate-800 mt-2 rounded-lg" playsInline autoPlay muted loop >
                            <source src="/images/studibetter.mp4" type="video/mp4" />
                        </video>
                    </a>
                    <p className="pt-2">🛹 I find that longboarding at the beach or in the park gives me peace of mind as the wind blows by the face 🛹</p>
                </div>
                <div className="max-w-[90%] mx-auto mt-2 rounded-lg md:w-[48%] min-[2500px]:w-[24%]">
                    <h1 className='text-3xl'><a href="https://raymond.is-a.dev/Pokemon-Memory-Game/" target="#"> Pokemon Memory Game </a></h1>
                    <a href="https://raymond.is-a.dev/Pokemon-Memory-Game/" target="#">
                        <video className=" border-2 border-slate-800 mt-2 rounded-lg" playsInline autoPlay muted loop >
                            <source src="/images/pokemon.mp4" type="video/mp4" />
                        </video>
                    </a>
                    <p className="pt-2"> 🐕 Tiger, my golden retriever, and I enjoy our daily walks around the neighborhood 🐕</p>
                </div>
                <div className="max-w-[90%] mx-auto mt-2 rounded-lg md:w-[48%] min-[2500px]:w-[24%]">
                    <h1 className='text-3xl'><a href="https://raymond.is-a.dev/Beluga-Theme-Store/" target="#"> Yeezy Beluga Theme Store </a></h1>
                    <a href="https://raymond.is-a.dev/Beluga-Theme-Store/" target="#">
                        <video className=" border-2 border-slate-800 mt-2 rounded-lg" playsInline autoPlay muted loop >
                            <source src="/images/beluga.mp4" type="video/mp4" />
                        </video>
                    </a>
                    <p className="pt-2"> &#127936; I try to start my day with a workout plus the swish sound that a basketball makes is music to my ears &#127936;</p>
                </div>
            </div>
        </div>
    )
}