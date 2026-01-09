import Navbar from './components/Navbar'
import Intro from './sections/Intro'
import Events from './sections/Events'
import Marketplace from './sections/Marketplace'
import Donate from './sections/Donate'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <Events />
        <Marketplace />
        <Donate />
      </main>
      <Footer />
    </>
  )
}