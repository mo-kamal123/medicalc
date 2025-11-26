import CustomizeByAge from '../../../../shared/components/customize-by-age';
import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';

const StandardCustomizeByAge = () => {
  const PLAN_META = {
    white: {
      name: 'white',
      color: 'text-blue-400',
      icon: <FaStar className="text-blue-400 text-2xl" />,
    },
    silver: {
      name: 'silver',
      color: 'text-gray-400',
      icon: <FaMedal className="text-gray-400 text-2xl" />,
    },
    gold: {
      name: 'gold',
      color: 'text-yellow-400',
      icon: <FaCrown className="text-yellow-400 text-2xl" />,
    },
  };
  return (
    <div>
      <CustomizeByAge
        nextStep={'/standard-package/coverage-details'}
        PLAN_META={PLAN_META}
      />
    </div>
  );
};

export default StandardCustomizeByAge;
