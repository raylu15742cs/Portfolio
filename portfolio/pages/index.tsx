import Header from './header'
import Projectcomponent from '../components/projectcomponent'
import Aboutcomponent from '../components/aboutcomponent'
import Resumecomponent from '../components/resumecomponent'
import Image from 'next/image'


export default function Home() {
  return (
    <div className='bg-[#e3e3e3] text-gray-700 h-screen w-screen pt-1'>
      <Header />
      <div className='text-center'>
        <div>
          <Image className="h-1/8 w-auto pl-20 pt-2" src="/images/profile.png" alt={''} width={500} height={500} />
          <h1 className='text-5xl'>Raymond Lu</h1>  
          <p className='text-sm'>Front End Developer based in Pasadena, CA</p>
        </div>
      </div>
      
      <Aboutcomponent />
      <Projectcomponent />
      <Resumecomponent />
    </div>
  )
}
