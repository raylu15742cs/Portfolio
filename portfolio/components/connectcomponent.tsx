import Image from "next/image"


export default function Connectcomponent() {
    return (
        <div className="mx-[20%]">
            <div className="text-center text-xl">
                Connect With Me
            </div>
            <div className=" flex mx-auto pt-1 sm:max-w-[200px] ">
                <a className="mx-auto" href="https://www.linkedin.com/in/raylu15742/" target="#">
                    <Image className="h-[30px] w-auto" src="/images/linkedin.png" alt={''} width={500} height={500} />
                </a>
            
                <a className="mx-auto"  href="https://www.youtube.com/@raymond-tfl" target="#">
                    <Image className="h-[30px] w-auto  " src="/images/youtubeicon.png" alt={''} width={500} height={500} />
                </a>
                 <a className="mx-auto"  href="https://github.com/raylu15742cs" target="#">
                    <Image className="h-[30px] w-auto" src="/images/githubicon.png" alt={''} width={500} height={500} />
                </a>
                <a className="mx-auto"  href="https://twitter.com/RaymondLuTech" target="#">
                    <Image className="h-[35px] w-auto" src="/images/twittericon.png" alt={''} width={500} height={500} />
                </a>
            </div>
        </div>
    )
}