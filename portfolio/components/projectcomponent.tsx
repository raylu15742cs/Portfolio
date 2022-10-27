import Image from "next/image"

export default function Projectcomponent() {
    return (
         <div className="text-center pt-4">
            <h1 className='text-3xl'>Projects</h1>
            <h2> Pokemon </h2>
            <video playsInline autoPlay muted loop >
                <source src="/images/pokemon.mp4" type="video/mp4" />
            </video>
            <h2> Yeezy Beluga </h2>
            <video playsInline autoPlay muted loop >
                <source src="/images/beluga.mp4" type="video/mp4" />
            </video>
            <h2> Battleship </h2>
            <video playsInline autoPlay muted loop >
                <source src="/images/battleship.mp4" type="video/mp4" />
            </video>
        </div>
    )
}