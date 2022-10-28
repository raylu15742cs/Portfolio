import Image from "next/image"


export default function Connectcomponent() {
    return (
        <div>
            <div className="text-center text-3xl">
                Connect With Me
            </div>
            <div className="flex mx-[10%]  ">
                <Image className="h-[15vw] w-auto mx-auto " src="/images/youtubeicon.png" alt={''} width={500} height={500} />
                <Image className="h-[15vw] w-auto mx-auto" src="/images/linkedin.png" alt={''} width={500} height={500} />
                <Image className="h-[15vw] w-auto mx-auto" src="/images/githubicon.png" alt={''} width={500} height={500} />
                <Image className="h-[15vw] w-auto mx-auto" src="/images/youtubeicon.png" alt={''} width={500} height={500} />
            </div>
        </div>
    )
}