import Projectcomponent from "../components/projectcomponent"
import Header from "./header"

export default function Project() {
    return (
         <div className='bg-[#e3e3e3] text-gray-700 pt-2 pb-5' >
            <Header />
            <Projectcomponent />
        </div>
    )
}