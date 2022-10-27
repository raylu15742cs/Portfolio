import Header from './header'
import Projectcomponent from '../components/projectcomponent'
import Aboutcomponent from '../components/aboutcomponent'
import Resumecomponent from '../components/resumecomponent'
import Image from 'next/image'


export default function Home() {
  return (
    <div className='bg-[#e3e3e3] text-gray-700 pt-2 pb-5'>
      <Header />
      <div className='text-center'>
        <div>
          <Image className="h-[60vw] w-auto ml-[auto] mr-[auto] pt-2" src="/images/profile.png" alt={''} width={500} height={500} />
          <h1 className='text-5xl pt-1'>Raymond Lu</h1>  
          <p className='text-sm pt-1'>Front End Developer based in Pasadena, CA</p>
        </div>
      </div>
      <Projectcomponent />
      {/*       <Aboutcomponent />
      <Resumecomponent />
       */}
    </div>
  )
}
