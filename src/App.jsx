import './App.scss'
import Test from './Test'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Parallax from './components/parallax/Parallax'
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Services"><Parallax type='services'/></section>
      <section>Services</section>
      <section id="Portfolio"><Parallax type='portfolio'/></section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id='Contact'><Parallax type='contact'/></section>
      <section>Contact</section>
    </div>
  )
}

export default App
