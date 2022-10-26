import Aboutcomponent from "../components/aboutcomponent"
import Header from "./header"

export default function About() {
    return (
        <div className='bg-[#d7eaf3] text-[#14397d] h-screen  dark:bg-[#14397d] dark:text-[#d7eaf3]'>
      <Header />
      <Aboutcomponent />
    </div>
    )
}