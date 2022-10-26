import Header from './header'
import Projectcomponent from '../components/projectcomponent'
import Aboutcomponent from '../components/aboutcomponent'
import Resumecomponent from '../components/resumecomponent'
import Image from 'next/image'


export default function Home() {
  return (
    <div className='bg-[#e3e3e3] text-gray-700 h-screen '>
      <Header />
      <h1 className='text-6xl'>Raymond Lu</h1>
      <Image className="h-1/6 w-auto" src="/images/profile.png" alt={''} width={500} height={500} />
      <Aboutcomponent />
      <Projectcomponent />
      <Resumecomponent />
    </div>
  )
}
