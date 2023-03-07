import Aboutcomponent from "../components/aboutmecomponent"
import Connectcomponent from "../components/connectcomponent"
import Header from "./header"

export default function About() {
    return (
      <div className='bg-[#e3e3e3] text-gray-700 pb-2 min-h-screen'>
      <Header />
      <Aboutcomponent />
      {/* <Connectcomponent /> */}
      <div className='flex justify-center pb-1 p-3'>
        <a href="/" className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">                                             
          <span className="w-full">Back to Home</span>
          <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a> 

      </div>
    </div>
    )
}