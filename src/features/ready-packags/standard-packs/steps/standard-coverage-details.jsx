import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';
import CoverageDetails from '../../../../shared/components/coverage-details';

const StandardCoverageDetails = () => {
  const plans = [
    {
      icon: <FaStar className="text-blue-400 text-2xl" />,
      title: 'Standard White Plan',
      data: {
        employees: 25,
        pooled: '8,965,698',
        total: '8,965,698',
      },
    },
    {
      icon: <FaMedal className="text-gray-400 text-2xl" />,
      title: 'Silver Plan',
      data: {
        employees: 20,
        pooled: '8,965,698',
        total: '8,965,698',
      },
    },
    {
      icon: <FaCrown className="text-yellow-400 text-2xl" />,
      title: 'Premium Gold Plan',
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

  return <CoverageDetails plans={plans} />;
};

export default StandardCoverageDetails;
