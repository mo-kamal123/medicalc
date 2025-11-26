import { useEffect, useState } from 'react';
import PlanAgeTable from '../../ready-packags/standard-packs/components/plan-age-table';
import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { updateClientData } from '../../client/store/client-slice';
import CustomizeByAge from '../../../shared/components/customize-by-age';

// Convert API response (premiums grouped by limit)
const transformApiDataToPlans = (apiResponse, type) => {
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
  const ageGroups = [
    '_0_17',
    '_18_24',
    '_25_29',
    '_30_34',
    '_35_39',
    '_40_44',
    '_45_49',
    '_50_54',
    '_55_59',
    '_60_64',
    '_65_69',
    '_70_74',
    '_75_79',
    '_plus_80',
  ];

  apiResponse.data.forEach((plan) => {
    const { name, limit, premiums } = plan;

    if (type === 'custom') {
      // For CUSTOM type: Initialize with zeros for manual employee count entry
      plans[name] = ageGroups.reduce((acc, ageKey) => {
        acc[ageKey] = 0;
        return acc;
      }, {});
    } else {
      // For SUMMARY type: Use actual premium values from API
      plans[name] = premiums;
    }
    // Get plan name from title
    const getPlanKey = (title) => {
      const lower = title?.toLowerCase?.() || '';
      if (lower.includes('1')) return 'planOne';
      if (lower.includes('2')) return 'planTwo';
      if (lower.includes('3')) return 'planThree';
      if (lower.includes('4')) return 'planFour';
      if (lower.includes('5')) return 'planFive';
      if (lower.includes('6')) return 'planSix';
      if (lower.includes('7')) return 'planSeven';
      if (lower.includes('8')) return 'planEight';
      if (lower.includes('9')) return 'planNine';
      if (lower.includes('10')) return 'planTen';
      return title;
    };
    PLAN_META[name] = {
      name: getPlanKey(name),
      limit,
      color: planColors[name] || 'text-gray-600',
      icon: planIcons[name] || <FaStar className="text-gray-400 text-2xl" />,
    };
  });

  return { plans, PLAN_META };
};
const CustomCustomizeByAge = () => {
  const dispatch = useDispatch();
  const calculationData = useSelector((state) => state.calculationResult);

  const [plans, setPlans] = useState(null);
  const [PLAN_META, setPLAN_META] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!calculationData) return;

    setLoading(true);

    // Transform the calculation results into table format
    const { plans: transformedPlans, PLAN_META: meta } =
      transformApiDataToPlans(calculationData, 'custom');

    setPlans(transformedPlans);
    setPLAN_META(meta);

    // Save calculationId to client slice
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
        Loading customized plan...
      </div>
    );
  }

  if (!plans || !PLAN_META) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg text-red-600">
        Error loading customized plan data
      </div>
    );
  }
  console.log(plans);
  console.log(PLAN_META);
  return (
    <div>
      {/* <PlanAgeTable
        plans={plans}
        PLAN_META={PLAN_META}
        navigation={`/custom-package/coverage-details`} // <-- DIFFERENT ROUTE
        type='custom'
      /> */}
      <CustomizeByAge
        PLAN_META={PLAN_META}
        nextStep={'/custom-package/coverage-details'}
      />
    </div>
  );
};

export default CustomCustomizeByAge;
