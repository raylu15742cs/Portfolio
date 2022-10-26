import Header from "./header"
import Maincomponent from "../components/maincomponent"
export default function Main() {
    return (
         <div className='bg-[#d7eaf3] text-[#14397d] h-screen  dark:bg-[#14397d] dark:text-[#d7eaf3]'> 
          <Header />
          <Maincomponent />
         </div>
    )
}