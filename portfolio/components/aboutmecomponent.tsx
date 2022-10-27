export default function Aboutmecomponent() {
    return (
         <div className="w-[80%] mx-auto text-xs">
            <h1 className='text-3xl text-center'>About Me</h1>
            <p>Hello! My name is Raymond, I have an economics background but hope to build a career in the world of web development. My interest started back in 2019 when I decided to took an introduction to computer science course based on python. It was one of the courses, I took that definitely peaked my interested in the field. </p>
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
    )
}