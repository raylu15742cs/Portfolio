import Header from './header'
import Projectcomponent from '../components/projectcomponent'
import Aboutcomponent from '../components/aboutcomponent'
import Resumecomponent from '../components/resumecomponent'

export default function Home() {
  return (
    <div className='bg-[#FF7600] text-gray-200'>
      <Header />
      <h1 className='text-6xl'> This is Home</h1>
      <Projectcomponent />
      <Aboutcomponent />
      <Resumecomponent />
    </div>
  )
}
