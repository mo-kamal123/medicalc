import { useEffect, useState } from 'react';
import PlanAgeTable from '../../standard-packs/components/plan-age-table'; // Adjust import path
import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { updateClientData } from '../../../client/store/client-slice';
import { useNavigate } from 'react-router-dom';

import { PLAN_KEY_MAP } from '../../../../shared/utils/plan-mapping';

const transformApiDataToPlans = (apiResponse) => {
  const plans = {};
  const PLAN_META = {};

  const planIcons = {
    planOne: <FaCrown className="text-yellow-400 text-2xl" />,
    planTwo: <FaMedal className="text-gray-400 text-2xl" />,
    planThree: <FaStar className="text-blue-400 text-2xl" />,
    planFour: <FaStar className="text-green-400 text-2xl" />,
  };

  const planColors = {
    planOne: 'text-yellow-400',
    planTwo: 'text-gray-400',
    planThree: 'text-blue-400',
    planFour: 'text-green-400',
  };

  apiResponse.data.forEach((plan) => {
    const { name, limit, premiums } = plan;

    plans[limit] = premiums;

    PLAN_META[limit] = {
      key: name, // internal key (planOne)
      name: PLAN_KEY_MAP[name] || name, // UI label (Plan 1)
      color: planColors[name] || 'text-gray-600',
      icon: planIcons[name] || null,
    };
  });

  return { plans, PLAN_META };
};

const PremiumPlanSummaryByAge = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculationData = useSelector((state) => state.calculationResult);

  const [plans, setPlans] = useState(null);
  const [planMeta, setPlanMeta] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!calculationData?.data?.length) {
      setLoading(false);
      return;
    }

    try {
      const { plans: transformedPlans, PLAN_META } =
        transformApiDataToPlans(calculationData);

      setPlans(transformedPlans);
      setPlanMeta(PLAN_META);

      if (calculationData.calculationId) {
        dispatch(
          updateClientData({ calculationId: calculationData.calculationId })
        );
      }

      setLoading(false);
    } catch (error) {
      console.error('Error transforming data', error);
      setLoading(false);
    }
  }, [calculationData, dispatch]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen text-lg text-gray-600">
        Loading premium plans...
      </div>
    );

  if (!plans || !planMeta)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-lg text-gray-600 gap-4">
        <p>No plan data available. Please try again.</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );

  return (
    <div>
      <PlanAgeTable
        plans={plans}
        PLAN_META={planMeta}
        navigation={'/premium-package/plan-by-age/custom'}
        type="summary"
      />
    </div>
  );
};

export default PremiumPlanSummaryByAge;
