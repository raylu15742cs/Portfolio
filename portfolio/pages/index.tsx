import Header from './header'
import Projectcomponent from '../components/projectcomponent'
import Aboutcomponent from '../components/aboutcomponent'
import Resumecomponent from '../components/resumecomponent'
import Image from 'next/image'


export default function Home() {
  return (
    <div className='bg-[#e3e3e3] text-gray-700 h-screen w-screen pt-3'>
      <Header />
      <div className='flex h-32 ml-2 text-center mt-5'>
        <div>
          <h1 className='text-4xl pt-10'>Raymond Lu</h1>  
          <p className='text-xs'>Front End Developer based in Pasadena, CA</p>
        </div>
        <Image className="h-1/8 w-auto" src="/images/profile.png" alt={''} width={500} height={500} />
      </div>
      
      <Aboutcomponent />
      <Projectcomponent />
      <Resumecomponent />
    </div>
  )
}
