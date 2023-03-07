import Aboutcomponent from "../components/aboutmecomponent"
import Connectcomponent from "../components/connectcomponent"
import Header from "./header"

export default function About() {
    return (
        <div className='bg-[#e3e3e3] text-gray-700 pt-2 pb-5 h-screen'>
      <Header />
      <Aboutcomponent />
      {/* <Connectcomponent /> */}
    </div>
    )
}