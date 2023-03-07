export default function Aboutmecomponent() {
    return (
         <div className="w-[80%] mx-auto text-xs">
            <h1 className='text-3xl text-center'>About Me</h1>
            <div className="">
                <p>Hello! My name is Raymond and I am trying to build a career in the world of web development. I have an economics background, which I value since it taught me to see the world in a logical way.</p>
                <p className="pt-1">My first taste of web development was when I decided to take an intro to computer science course based on python. It was one of the courses that I will never forget, and it definitely peaked my interest in the field. </p>
                <p className="pt-1">I decided to take the next step and start learning web development on my own. I started with the Odin Project, and I am currently working on the curriculum. I am also working on my Youtube channel where I will be posting videos on my journey. </p>
                <p className="pt-1">My goal is to become a front end developer, and I am currently working on my skills in React, Node, and Python. I am also working on my skills in UI/UX design. </p>
                <p className="pt-1">Currently looking for a junior developer position, and I am open to any opportunities.  </p>
                <p className="pt-1">Here are a few technologies that I currently am using: </p>
                <div className="flex pt-1">
                    <ul className="pr-8 pl-7 list-disc">
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                    <ul className="list-disc pr-8">
                        <li>TypeScript</li>
                        <li>Node.js</li>
                    </ul>
                    <ul className="list-disc">
                        <li>Next.js</li>
                        <li>Tailwind</li>
                    </ul>
                </div>
            </div>
            <div className="max-w-[90%] mx-auto mt-2 rounded-lg md:w-[48%] min-[2500px]:w-[24%]">
                <h1 className='text-3xl'><a href="https://www.youtube.com/channel/UCZ0lcRhWFgwx0x7qsR-BlsQ" target="#"> My Youtube Channel </a></h1>
                <a href="https://www.youtube.com/channel/UCZ0lcRhWFgwx0x7qsR-BlsQ" target="#">
                <video className=" border-2 border-slate-800 mt-2 rounded-lg" playsInline autoPlay muted loop >
                  <source src="/images/youtube.mp4" type="video/mp4" />
                </video>
            </a>
            <p className="pt-2"> &#129391; My favorite dish to make is cold smoked salmon since I can give my bagel a huge portion of that delicious goodness &#129391;</p>
            <p className="pt-2">🛹 I find that longboarding at the beach or in the park gives me peace of mind as the wind blows by the face 🛹</p>
            <p className="pt-2"> 🐕 Tiger, my golden retriever, and I enjoy our daily walks around the neighborhood 🐕</p>
            <p className="pt-2"> &#127936; I try to start my day with a workout plus the swish sound that a basketball makes is music to my ears &#127936;</p>
        </div>
        </div>
    )
}