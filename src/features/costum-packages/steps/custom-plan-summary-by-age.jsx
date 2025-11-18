import { useEffect, useState } from 'react';
import PlanAgeTable from '../../ready-packags/standard-packs/components/plan-age-table';
import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { updateClientData } from '../../client/store/client-slice';

// Converts API data → UI-ready plans + metadata
const transformApiDataToPlans = (apiResponse) => {
  const plans = {};
  const PLAN_META = {};

  const planIcons = {
    planOne: <FaCrown className="text-yellow-400 text-2xl" />,
    planTwo: <FaMedal className="text-gray-400 text-2xl" />,
    planThree: <FaStar className="text-blue-400 text-2xl" />,
    planFour: <FaStar className="text-green-400 text-2xl" />,
    planFive: <FaStar className="text-purple-400 text-2xl" />,
    planSix: <FaStar className="text-orange-400 text-2xl" />,
    planSeven: <FaStar className="text-red-400 text-2xl" />,
    planEight: <FaStar className="text-teal-400 text-2xl" />,
    planNine: <FaStar className="text-pink-400 text-2xl" />,
    planTen: <FaStar className="text-indigo-400 text-2xl" />,
  };

  const planColors = {
    planOne: 'text-yellow-400',
    planTwo: 'text-gray-400',
    planThree: 'text-blue-400',
    planFour: 'text-green-400',
    planFive: 'text-purple-400',
    planSix: 'text-orange-400',
    planSeven: 'text-red-400',
    planEight: 'text-teal-400',
    planNine: 'text-pink-400',
    planTen: 'text-indigo-400',
  };

  const planDisplayNames = {
    planOne: 'Plan 1',
    planTwo: 'Plan 2',
    planThree: 'Plan 3',
    planFour: 'Plan 4',
    planFive: 'Plan 5',
    planSix: 'Plan 6',
    planSeven: 'Plan 7',
    planEight: 'Plan 8',
    planNine: 'Plan 9',
    planTen: 'Plan 10',
  };

  // Process API data
  apiResponse.data.forEach((plan) => {
    const { name, limit, premiums } = plan;

    // Use plan name (camelCase) as key
    plans[name] = premiums;

    PLAN_META[name] = {
      name: planDisplayNames[name] || name, // UI name
      limit,
      color: planColors[name] || 'text-gray-600',
      icon: planIcons[name] || <FaStar className="text-gray-400 text-2xl" />,
    };
  });

  return { plans, PLAN_META };
};

const CustomPlanSummaryByAge = () => {
  const dispatch = useDispatch();
  const [plans, setPlans] = useState(null);
  const [PLAN_META, setPLAN_META] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔥 GET REAL DATA FROM REDUX STORE
  const calculationData = useSelector((state) => state.calculationResult);

  useEffect(() => {
    if (!calculationData || !calculationData.data) {
      setLoading(false);
      return;
    }

    setLoading(true);

    // Transform real API/store data
    const { plans: transformedPlans, PLAN_META: meta } =
      transformApiDataToPlans(calculationData);

    setPlans(transformedPlans);
    setPLAN_META(meta);

    // Save calculationId to store if exists
    if (calculationData.calculationId) {
      dispatch(
        updateClientData({ calculationId: calculationData.calculationId })
      );
    }

    setLoading(false);
  }, [calculationData, dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg text-gray-600">
        Loading plans...
      </div>
    );
  }

  if (!plans || !PLAN_META) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg text-red-600">
        Error loading plan data
      </div>
    );
  }

  return (
    <div>
      <PlanAgeTable
        plans={plans}
        PLAN_META={PLAN_META}
        navigation={`/custom-package/plan-by-age/custom`}
      />
    </div>
  );
};

export default CustomPlanSummaryByAge;
