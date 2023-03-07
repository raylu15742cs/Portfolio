import Projectcomponent from '../components/projectcomponent'
import Timelinecomponent from '../components/timelinecomponent'
import Aboutmecomponent from '../components/aboutmecomponent'
import Connectcomponent from '../components/connectcomponent'
import Link from 'next/link'
import Header from './header'


export default function Home() {
  return (
    <div className='bg-[#e3e3e3] text-gray-700 pt-1 pb-2 min-h-screen'>
      <Header />
      <Projectcomponent />
      <Link href='/about'>Learn More About Me!</Link>
    </div>
  )
}
