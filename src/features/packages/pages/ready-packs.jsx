import PackageCard from '../components/package-card';
import standard from '../assets/standard.png';
import premium from '../assets/premium.jpg';
import { FaCrown, FaStar, FaMedal } from 'react-icons/fa';

const ReadyPacks = () => {
  // Premium Package Plans
  const premiumPlans = [
    {
      name: 'Program 1',
      price: '200k',
    },
    {
      name: 'Program 2',
      price: '100k',
    },
    {
      name: 'Program 3',
      price: '50k',
    },
    {
      name: 'Program 4',
      price: '25k',
    },
  ];

  // Standard Package Plans
  const standardPlans = [
    {
      name: 'Gold Plane',
      icon: <FaCrown className="text-yellow-500" />,
      price: '100k',
    },
    {
      name: 'Silver Plane',
      icon: <FaMedal className="text-gray-400" />,
      price: '50k',
    },
    {
      name: 'White Plane',
      icon: <FaStar className="text-blue-400" />,
      price: '20k',
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-8 w-full lg:w-[80%] m-auto px-4 sm:px-6 lg:px-0 py-4 sm:py-6 lg:py-0">
      <PackageCard
        img={premium}
        header={'Premium Package'}
        plans={premiumPlans}
        btnTitle={'Choose Premium'}
        navigate={'/premium-package/plan-data'}
      />
      <PackageCard
        img={standard}
        header={'Standard Package'}
        plans={standardPlans}
        btnTitle={'Choose Standard'}
        navigate={'/standard-package/plan-data'}
      />
    </div>
  );
};
export default ReadyPacks;
