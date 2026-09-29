import Funcionalidades from './funcionalidades'
import Hero from '../layout/hero'
import Navbar from '../layout/NavBar'
import StartNow from '../components/StartNow'
import Contact from './contact'
import Footer from './footer'
import Chat from '../components/ChatButton'

function App() {
  return (
    <main className='relative'>
      <Navbar />
      <Hero />
      <Funcionalidades />
      <StartNow />
      <Contact />
      <Footer />
      <div className='fixed right-8  bottom-10'>
        <Chat />
      </div>
    </main>
  )
}

export default App
