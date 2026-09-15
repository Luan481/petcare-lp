import Funcionalidades from './funcionalidades'
import Hero from '../layout/hero'
import Navbar from '../layout/NavBar'
import StartNow from '../components/StartNow'
import Contact from './contact'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Funcionalidades />
      <StartNow />
      <Contact />
    </>
  )
}

export default App
