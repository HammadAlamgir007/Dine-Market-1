import './App.css'
import Footer from '../components/Footer/footer'
import HeroBanner from '../components/Hero Banner'
import Events from '../components/Events/Events'
import Products from '../components/Products/Products'
import Navbar1 from '../components/Navbar/Navbar'
import Marketing from '../components/Marketing'
import Newsletter from '../components/Newsletter'
function App() {

  return (
    <>
      <Navbar1 />
      <HeroBanner />
      <Events />
      <Products />
      <Marketing />
      <Newsletter/>
      <Footer />
    </>
  )
}

export default App
