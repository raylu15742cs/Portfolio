import Header from '../components/header'
import About from './about'
import Main from './main'
import Project from './project'
import Resume from './resume'

export default function Home() {
  return (
    <div>
    <Header />
    <About />
    <Main />
    <Project />
    <Resume />
    </div>
  )
}
