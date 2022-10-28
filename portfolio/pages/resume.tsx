import Resumecomponent from "../components/resumecomponent"
import Header from "./header"

export default function Resume() {
    return (
         <div className='bg-[#e3e3e3] text-gray-700 pt-2 pb-5 h-screen'>
            <Header />
            <Resumecomponent />
        </div>
    )
}