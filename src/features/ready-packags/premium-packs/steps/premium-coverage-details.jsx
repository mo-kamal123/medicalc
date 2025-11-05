import CoverageDetails from '../../../../shared/components/coverage-details';
import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';
const PremiumCoverageDetails = () => {
  const plans = [
    {
      icon: <FaStar className="text-blue-400 text-2xl" />,
      title: 'Plan 1',
      data: {
        employees: 25,
        pooled: '8,965,698',
        total: '8,965,698',
      },
    },
    {
      icon: <FaMedal className="text-gray-400 text-2xl" />,
      title: 'Plan 2',
      data: {
        employees: 20,
        pooled: '8,965,698',
        total: '8,965,698',
      },
    },
    {
      icon: <FaCrown className="text-yellow-400 text-2xl" />,
      title: 'Plan 3',
      data: {
        employees: 50,
        pooled: '8,965,698',
        total: '8,965,698',
      },
    },
    {
      icon: <FaCrown className="text-yellow-400 text-2xl" />,
      title: 'Plan 4',
      data: {
        employees: 50,
        pooled: '8,965,698',
        total: '8,965,698',
      },
    },

    {
      title: 'Employees',
      data: {
        employees: 'Total Employees',
        pooled: 'Total Premium with pooled benefit',
        total: 'Total Premium EGP',
      },
    },
  ];

  return (
    <div>
      <CoverageDetails plans={plans} />
    </div>
  );
};

export default PremiumCoverageDetails;
