import Header from '../../widgets/header/Header'
import Hero from '../../widgets/hero/Hero'
import Benefits from '../../widgets/benefits/Benefits'
import ProductShowcase from '../../widgets/product-showcase/ProductShowcase'
import HowItWorks from '../../widgets/how-it-works/HowItWorks'
import Testimonials from '../../widgets/testimonials/Testimonials'
import Offer from '../../widgets/offer/Offer'
import Footer from '../../widgets/footer/Footer'

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <ProductShowcase />
        <HowItWorks />
        <Testimonials />
        <Offer />
      </main>
      <Footer />
    </>
  )
}

export default Home
