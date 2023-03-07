import Link from "next/link"
import Image from 'next/image'

export default function Header() {
    return (
        <ul className="justify-between px-5 ">
            <Link href="/">
                <div className='text-center '>
                    <div className='sm:flex items-center md:mx-auto'>
                    <div className='hidden sm:inline mx-auto sm:mr-0'>
                        <h1 className='text-5xl pt-1'>Raymond Lu</h1>  
                    <p className='text-sm pt-1'>Software Engineer based in Pasadena, CA</p>
                    <p>求不得 放不下</p>
                    </div>
                    <Image className="h-[20vh] w-auto pt-2 mx-auto sm:ml-0" src="/images/profile.png" alt={''} width={500} height={500} />
                    <div className='sm:hidden'>
                        <h1 className='text-5xl pt-1'>Raymond Lu</h1>  
                    <p className='text-sm pt-1'>Software Engineer based in Pasadena, CA</p>
                    <p>求不得 放不下</p>
                    </div>
                    </div>
                </div>
            </Link>
        </ul>
    )
}