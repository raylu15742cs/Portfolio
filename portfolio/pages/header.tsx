import Link from "next/link"

export default function Header() {
    return (
        <ul className="flex flex-row space-x-2 ml-10">
            <li>
            <Link href="/">Home</Link>
            </li>
            <li>
            <Link href="/about">About</Link>
            </li>
            <li>
            <Link href="/main">Main</Link>
            </li>
            <li>
            <Link href="/project">Project</Link>
            </li>
            <li>
            <Link href="/resume">Resume</Link>
            </li>
        </ul>
    )
}