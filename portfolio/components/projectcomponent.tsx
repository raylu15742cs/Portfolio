import Image from "next/image"

export default function Projectcomponent() {
    return (
         <div className="text-center pt-4">
            <h1 className='text-3xl'>Projects</h1>
            <h2> Yeezy Beluga </h2>
            <video className="" autoPlay muted loop >
                <source src="/images/beluga.mp4" type="video/mp4" />
            </video>
            <h2> Project 2 </h2>
            <video className="" autoPlay muted loop >
                <source src="/images/pokemon.mp4" type="video/mp4" />
            </video>
            <h2> Project 3 </h2>
            <video className="" autoPlay muted loop >
                <source src="/images/battleship.mp4" type="video/mp4" />
            </video>
        </div>
    )
}