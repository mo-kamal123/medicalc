import HeroCard from "../components/hero-card"
import cardImg1 from '../assets/vector1.png'
import cardImg2 from '../assets/vector2.png'
import { CiCalculator1 } from "react-icons/ci"
const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-10 w-full h-full">
        <div className="flex items-center justify-center gap-10 mt-15">
            <HeroCard img={cardImg1} heading={'Program Management'} desc={'Integrated system for managing exceptions, critical limits, and programs'}  />
            <HeroCard img={cardImg2} heading={'Comprehensive Reports'} desc={'Detailed reports and charts for informed decision making'}  />
        </div>
        <button className="flex items-center gap-2 bg-main text-white p-3 rounded-xl"><p className="text-2xl"><CiCalculator1 /></p> Open Calculator</button>
    </div>
  )
}

export default Hero