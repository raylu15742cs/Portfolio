import Header from "./header"
import Maincomponent from "../components/aboutmecomponent"
export default function Main() {
    return (
         <div className='bg-[#e3e3e3] text-gray-700 pt-2 pb-5 h-screen'> 
          <Header />
          <Maincomponent />
         </div>
    )
}