import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';
import HealthcareServices from '../../../../shared/components/healthcare-services';

const StandardHealthcareServices = () => {
  const plans = [
    {
      id: 1,
      icon: <FaStar className="text-blue-400 text-2xl" />,
      title: 'Standard White Plan',
    },
    {
      id: 2,
      icon: <FaMedal className="text-gray-400 text-2xl" />,
      title: 'Silver Plan',
    },
    {
      id: 3,
      icon: <FaCrown className="text-yellow-400 text-2xl" />,
      title: 'premium Gold Plan',
    },
  ];

  return (
    <HealthcareServices
      plans={plans}
      nextNavigation={'/standard-package/reimbursement-details'}
      prevNavigation={'/standard-package/plan-data'}
    />
  );
};

export default StandardHealthcareServices;
