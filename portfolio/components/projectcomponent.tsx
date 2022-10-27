import Image from "next/image"

export default function Projectcomponent() {
    return (
         <div className="text-center pt-4">
            <h1 className='text-3xl'>Projects</h1>
            <h2> Yeezy Beluga </h2>
            <video autoPlay muted loop >
                <source src="/images/beluga.mp4" type="video/mp4" />
            </video>
            <Image className="h-auto w-[90vw] ml-[auto] mr-[auto] pt-2" src="/images/rectangle.jpeg" alt={''} width={500} height={500} />
            <h2> Project 2 </h2>
            <Image className="h-auto w-[90vw] ml-[auto] mr-[auto] pt-2" src="/images/rectangle.jpeg" alt={''} width={500} height={500} />
            <h2> Project 3 </h2>
            <Image className="h-auto w-[90vw] ml-[auto] mr-[auto] pt-2" src="/images/rectangle.jpeg" alt={''} width={500} height={500} />
        </div>
    )
}