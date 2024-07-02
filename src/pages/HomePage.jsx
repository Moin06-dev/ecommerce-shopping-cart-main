/* eslint-disable react/prop-types */
import Navbar from "../components/NavBar"
import Hero from "../components/Hero"
import TwoImage from "../components/TwoImage"
import LatestCollection from "../components/LatestCollection"
import Footer from "../components/Footer"
import WideImage from "../components/WideImage"
import Newsletter from "../components/Newsletter"
import BestSeller from "../components/BestSeller"
import { useContext } from "react"
import { ShopContext } from "../App"

const HomePage = () => {

  const { carts } = useContext(ShopContext)

  return (
    <div className="max-w-8xl mx-auto">
        <Navbar  badge={carts.length}  />
        <Hero />
        <TwoImage />
        <BestSeller />
        <LatestCollection />
        <WideImage />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default HomePage