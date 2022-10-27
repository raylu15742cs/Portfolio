import Link from "next/link"

export default function Header() {
    return (
        <ul className=" text-orange-400 flex justify-between px-3 ">
            <li>
            <Link href="/">Home</Link>
            </li>
            <div className="flex space-x-2">
                <li>
                    <Link href="/about">About</Link>
                    </li>
                    <li>
                    <Link href="/main">Main</Link>
                    </li>
                    <li>
                    <Link href="/project">Project</Link>
                </li>   
            </div>
            <li>
            <Link href="/resume">Resume</Link>
            </li>
        </ul>
    )
}