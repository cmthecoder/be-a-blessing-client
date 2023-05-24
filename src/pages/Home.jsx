import Contact from "../components/Contact"
import Verse from "../components/Verse"
import About from "../components/About"
import CarouselContainer from "../components/CarouselContainer"



const Home = () => {
  return (
    <div>
      <CarouselContainer />
      <Verse />
      <About />
      <Contact />
    </div>
  )
}

export default Home