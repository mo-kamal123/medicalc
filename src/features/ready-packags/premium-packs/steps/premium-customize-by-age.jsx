import CustomizeByAge from '../../../../shared/components/customize-by-age';
import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';

const PremiumCustomizeByAge = () => {
  const PLAN_META = {
    planOne: {
      name: 'Plan 1',
      color: 'text-blue-400',
      icon: <FaStar className="text-blue-400 text-2xl" />,
    },
    planTwo: {
      name: 'Plan 2',
      color: 'text-gray-400',
      icon: <FaMedal className="text-gray-400 text-2xl" />,
    },
    planThree: {
      name: 'Plan 3',
      color: 'text-yellow-400',
      icon: <FaCrown className="text-yellow-400 text-2xl" />,
    },
    planFour: {
      name: 'Plan 4',
      color: 'text-yellow-400',
      icon: <FaCrown className="text-yellow-400 text-2xl" />,
    },
  };

  return (
    <div>
      <CustomizeByAge
        nextStep={'/premium-package/coverage-details'}
        PLAN_META={PLAN_META}
      />
    </div>
  );
};

export default PremiumCustomizeByAge;
