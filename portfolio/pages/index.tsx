import Header from './header'
import Projectcomponent from '../components/projectcomponent'
import Aboutcomponent from '../components/aboutcomponent'
import Resumecomponent from '../components/resumecomponent'

export default function Home() {
  return (
    <div>
      <Header />
      <h1 className='text-9xl'> This is Home</h1>
      <Projectcomponent />
      <Aboutcomponent />
      <Resumecomponent />
    </div>
  )
}
