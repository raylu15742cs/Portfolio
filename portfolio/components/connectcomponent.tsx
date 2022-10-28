import Image from "next/image"


export default function Connectcomponent() {
    return (
        <div>
            <div className="text-center text-3xl">
                Connect With Me
            </div>
            <div className="flex mx-[15%] pt-2 ">
                <a className="mx-auto" href="https://github.com/raylu15742cs" target="#">
                    <Image className="h-[40px] w-auto" src="/images/linkedin.png" alt={''} width={500} height={500} />
                </a>
                <a className="mx-auto"  href="hhttps://www.youtube.com/channel/UCZ0lcRhWFgwx0x7qsR-BlsQ" target="#">
                    <Image className="h-[40px] w-auto  " src="/images/youtubeicon.png" alt={''} width={500} height={500} />
                </a>
                 <a className="mx-auto"  href="https://www.linkedin.com/in/raylu15742/" target="#">
                    <Image className="h-[40px] w-auto" src="/images/githubicon.png" alt={''} width={500} height={500} />
                </a>
                <a className="mx-auto"  href="https://twitter.com/RaymondLuTech" target="#">
                    <Image className="h-[45px] w-auto" src="/images/twittericon.png" alt={''} width={500} height={500} />
                </a>
            </div>
        </div>
    )
}