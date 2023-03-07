export default function Projectcomponent() {
    return (
         <div className=" text-center pt-10 lg:mx-[5%]">
            <div className="flex flex-wrap">
                <div className="max-w-[90%] mx-auto mt-2 rounded-lg md:w-[48%] min-[2500px]:w-[24%]">
                    <a href="https://studibetterfront.onrender.com/" target="#">
                        <video className=" border-2 border-slate-800 mt-2 rounded-lg" playsInline autoPlay muted loop >
                            <source src="/images/studibetter.mp4" type="video/mp4" />
                        </video>
                    </a>
                </div>
                <div className="text-left max-w-[90%] mx-auto mt-2 rounded-lg md:w-[48%] min-[2500px]:w-[24%] md:px-20">
                    <h1 className='text-center text-3xl'><a href="https://studibetterfront.onrender.com/" target="#"> StudiBetter </a></h1>
                    <p>StudiBetter is an application for students and learners that target their weakness. By using a targeted quiz system, users get specialized quizs that improve their performance and memorization. The most challenging part about building StudiBetter was making sure that the quiz feature was working as intended. Creating a quiz that was randomized based on level and making sure that the updates were correct felt like the biggest point of growth for me.</p>
                    <p><strong>Motivation</strong> : I built studibetter because practice tests is one of the best ways to study. This project is largely based off of quizlet with the studyset and quiz feature. I wanted to build on that by creating a targeted quiz system which focus on which keyterms you are weak on.</p>
                    <p><strong>Latest Feature</strong> : By using Google Identification Services, each user can now have their own personal study set.</p>
                    <p><strong>Future Plans</strong> : One feature or update that I really want to implement is for users to be able to share study sets while still maintaining different levels.</p>
                    <a className="pr-2 font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://studibetterfront.onrender.com/" target="#">Live Link</a>
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://github.com/raylu15742cs/studibetter2.0" target="#">Github Repo</a>
                </div>
                <div className="max-w-[90%] mx-auto mt-2 rounded-lg md:w-[48%] min-[2500px]:w-[24%] md:px-20">
                    <h1 className='text-3xl'><a href="https://raymond.is-a.dev/Beluga-Theme-Store/" target="#"> Yeezy Beluga Theme Store </a></h1>
                    <p>Description</p>
                    <p>Struggles</p>
                    <p>Latest Feature</p>
                    <p>Future Plans</p>
                    <a className="pr-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"  href="https://raylu15742cs.github.io/Beluga-Theme-Store/" target="#">Live Link</a>
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://github.com/raylu15742cs/Beluga-Theme-Store" target="#">Github Repo</a>
                </div>
                <div className="max-w-[90%] mx-auto mt-2 rounded-lg md:w-[48%] min-[2500px]:w-[24%]">
                    <a href="https://raymond.is-a.dev/Beluga-Theme-Store/" target="#">
                        <video className=" border-2 border-slate-800 mt-2 rounded-lg" playsInline autoPlay muted loop >
                            <source src="/images/beluga.mp4" type="video/mp4" />
                        </video>
                    </a>
                </div>
                <div className="max-w-[90%] mx-auto mt-2 rounded-lg md:w-[48%] min-[2500px]:w-[24%]">
                    <a href="https://raymond.is-a.dev/Pokemon-Memory-Game/" target="#">
                        <video className=" border-2 border-slate-800 mt-2 rounded-lg" playsInline autoPlay muted loop >
                            <source src="/images/pokemon.mp4" type="video/mp4" />
                        </video>
                    </a>
                </div>
                <div className="max-w-[90%] mx-auto mt-2 rounded-lg md:w-[48%] min-[2500px]:w-[24%] md:px-20">
                    <h1 className='text-3xl'><a href="https://raymond.is-a.dev/Pokemon-Memory-Game/" target="#"> Pokemon Memory Game </a></h1>
                    <p>Description</p>
                    <p>Struggles</p>
                    <p>Latest Feature</p>
                    <p>Future Plans</p>
                    <a className="pr-2 font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://raymond.is-a.dev/Pokemon-Memory-Game/" target="#">Live Link</a>
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  href="https://github.com/raylu15742cs/Pokemon-Memory-Game" target="#">Github Repo</a>
                </div>
            </div>
        </div>
    )
}