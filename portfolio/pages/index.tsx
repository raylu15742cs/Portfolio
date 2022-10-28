import Header from './header'
import Projectcomponent from '../components/projectcomponent'
import Image from 'next/image'
import Timelinecomponent from '../components/timelinecomponent'
import Aboutmecomponent from '../components/aboutmecomponent'
import Connectcomponent from '../components/connectcomponent'


export default function Home() {
  return (
    <div className='bg-[#e3e3e3] text-gray-700 pt-2 pb-2'>
      <Header />
      <div className='text-center '>
        <div className='sm:flex items-center md:mx-auto'>
          <div className='hidden sm:inline mx-auto sm:mr-0'>
            <h1 className='text-5xl pt-1'>Raymond Lu</h1>  
          <p className='text-sm pt-1'>Front End Developer based in Pasadena, CA</p>
          <p>求不得 放不下</p>
          </div>
          <Image className="h-[30vh] w-auto pt-2 mx-auto sm:ml-0" src="/images/profile.png" alt={''} width={500} height={500} />
          <div className='sm:hidden'>
            <h1 className='text-5xl pt-1'>Raymond Lu</h1>  
          <p className='text-sm pt-1'>Front End Developer based in Pasadena, CA</p>
          <p>求不得 放不下</p>
          </div>
        </div>
      </div>
      <Projectcomponent />
      <hr className='mt-5 mx-[5%]'
        style={{
          borderColor: 'black',
          height: '3px',
        }}
      />
      <Aboutmecomponent />
      <hr className='mt-5 mx-[5%]'
        style={{
          borderColor: 'black',
          height: '3px',
        }}
      />
      <Timelinecomponent />
      <hr className='mt-5 mx-[5%]'
        style={{
          borderColor: 'black',
          height: '3px',
        }}
      />
      <Connectcomponent />
      {/*       <Aboutcomponent />
      <Resumecomponent />
       */}
    </div>
  )
}
