import Header from './header'
import Projectcomponent from '../components/projectcomponent'
import Aboutcomponent from '../components/aboutcomponent'
import Resumecomponent from '../components/resumecomponent'

export default function Home() {
  return (
    <div className='bg-[#d7eaf3] text-[#14397d] h-screen '>
      <Header />
      <h1 className='text-6xl'> This is Home</h1>
      <Projectcomponent />
      <Aboutcomponent />
      <Resumecomponent />
    </div>
  )
}
