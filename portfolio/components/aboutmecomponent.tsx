export default function Aboutmecomponent() {
    return (
         <div className="w-[90%] mx-auto text-xs">
            <h1 className='text-3xl text-center'>About Me</h1>
            <div className="border-2 border-slate-900 p-2 rounded-lg">
                <p>Hello! My name is Raymond and I am trying to build a career in the world of web development. I have an economics background, which I value since it taught me to see the world in a logical way.</p>
                <p>My first taste of web development was when I decided to take an intro to computer science course based on python. It was one of the courses that I will never forget, and it definitely peaked my interested in the field. </p>
            <p className="pt-1">Here are a few technologies that I currently am using: </p>
            <div className="flex pt-1">
                <ul className="pr-5 pl-3 list-disc">
                    <li>JavaScript (ES6+)</li>
                    <li>Node.js</li>
                    <li>React</li>
                </ul>
                <ul className="list-disc">
                    <li>TypeScript</li>
                    <li>Next.js</li>
                    <li>Tailwind</li>
                </ul>
            </div>
            </div>
        </div>
    )
}