import Link from "next/link"

export default function Header() {
    return (
        <ul className="justify-between pt-10 px-5 ">
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
        </ul>
    )
}