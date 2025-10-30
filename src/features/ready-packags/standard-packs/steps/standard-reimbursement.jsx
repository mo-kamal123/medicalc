import { FaStar, FaMedal, FaCrown } from 'react-icons/fa';
import Reimbursement from '../../../../shared/components/reimbursement';

const StandardReimbursement = () => {
  const plans = [
    {
      icon: <FaStar className="text-blue-400 text-2xl" />,
      title: 'Standard White Plan',
    },
    {
      icon: <FaMedal className="text-gray-400 text-2xl" />,
      title: 'Silver Plan',
    },
    {
      icon: <FaCrown className="text-yellow-400 text-2xl" />,
      title: 'premium Gold Plan',
    },
  ];

  return (
    <Reimbursement
      plans={plans}
      nextNavigation={'/standard-package/plan-by-age/summary'}
      prevNavigation={'/standard-package/healthcare-services'}
    />
  );
};

export default StandardReimbursement;
