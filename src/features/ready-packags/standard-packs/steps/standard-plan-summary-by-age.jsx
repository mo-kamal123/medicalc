import { useEffect, useState } from 'react';
import PlanAgeTable from '../components/plan-age-table';
import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { updateClientData } from '../../../client/store/client-slice';
import { useNavigate } from 'react-router-dom';

const transformApiDataToPlans = (apiResponse) => {
  const plans = {};
  const PLAN_META = {};

  const planIcons = {
    gold: <FaCrown className="text-yellow-400 text-2xl" />,
    silver: <FaMedal className="text-gray-400 text-2xl" />,
    white: <FaStar className="text-blue-400 text-2xl" />,
  };

  const planColors = {
    gold: 'text-yellow-400',
    silver: 'text-gray-400',
    white: 'text-blue-400',
  };
  const capitalizeFirstLetter = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  apiResponse.data.forEach((plan) => {
    const { name, limit, premiums } = plan;
    plans[limit] = premiums;
    PLAN_META[limit] = {
      name: capitalizeFirstLetter(name),
      color: planColors[name] || 'text-gray-600',
      icon: planIcons[name] || null,
    };
  });

  return { plans, PLAN_META };
};

const StandardPlanSummaryByAge = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculationData = useSelector((state) => state.calculationResult);

  const [plans, setPlans] = useState(null);
  const [planMeta, setPlanMeta] = useState(null);
  const [loading, setLoading] = useState(true);

  /* -----------------------------------------------
     🔥 SAFE REDIRECT + DATA PROCESSING
  ------------------------------------------------ */
  useEffect(() => {
    // Wait until Redux loads
    if (calculationData === undefined || calculationData === null) {
      setLoading(true);
      return;
    }

    // Check if required data is missing
    if (!calculationData.data || calculationData.data.length === 0) {
      // Debug: detect when no plan data is available before redirecting
      console.log('Missing data, redirecting...', calculationData);
      navigate('/', { replace: true });
      return;
    }

    // Process data (only runs once when data is valid)
    setLoading(true);

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
  }, [calculationData, navigate, dispatch]);

  // Show loading state
  if (loading || !plans || !planMeta) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg text-gray-600">
        Loading plans...
      </div>
    );
  }

  return (
    <div>
      <PlanAgeTable
        plans={plans}
        PLAN_META={planMeta}
        navigation={'/standard-package/plan-by-age/custom'}
      />
    </div>
  );
};

export default StandardPlanSummaryByAge;
