import HeroCard from '../components/hero-card';
import cardImg1 from '../assets/vector1.png';
import cardImg2 from '../assets/vector2.png';
import { CiCalculator1 } from 'react-icons/ci';
import Header from '../../../shared/UI/header';
import { Link } from 'react-router-dom';

/**
 * Hero / Home Page Component
 *
 * Main landing page for authenticated users.
 * Displays application overview and provides access to the calculator.
 *
 * Features:
 * - Application header with description
 * - Feature cards showcasing key capabilities
 * - Direct link to start using the calculator
 *
 * @returns {JSX.Element} Hero/home page component
 */
const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 w-full h-full px-4 sm:px-6 lg:px-0">
      <Header
        heading={
          'Smart Self-Management Calculator Empowering Smarter Program Control'
        }
        desc={
          'The Smart Self-Management Calculator is an intelligent tool designed to help healthcare and insurance'
        }
      />
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10 w-full mt-8 sm:mt-12 lg:mt-15">
        <HeroCard
          img={cardImg1}
          heading={'Program Management'}
          desc={
            'Integrated system for managing exceptions, critical limits, and programs'
          }
        />
        <HeroCard
          img={cardImg2}
          heading={'Comprehensive Reports'}
          desc={'Detailed reports and charts for informed decision making'}
        />
      </div>
      <Link
        to={'client-info'}
        className="flex items-center gap-2 bg-main text-white p-2.5 sm:p-3 mb-6 sm:mb-8 lg:mb-10 rounded-xl text-sm sm:text-base w-full sm:w-auto justify-center"
      >
        <p className="text-xl sm:text-2xl">
          <CiCalculator1 />
        </p>
        Open Calculator
      </Link>
    </div>
  );
};

export default Hero;
