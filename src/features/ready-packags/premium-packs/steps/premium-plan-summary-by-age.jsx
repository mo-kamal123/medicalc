import { id } from 'zod/locales';
import PlanAgeTable from '../../standard-packs/components/plan-age-table';
import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';

const plans = {
  _100000: {
    _0_17: 3544.164,
    _18_24: 4434.893,
    _25_29: 5120.2875,
    _30_34: 6110.3141,
    _35_39: 7252.7178,
    _40_44: 8365.029,
    _45_49: 10137.9875,
    _50_54: 11212.9682,
    _55_59: 14259.3037,
    _60_64: 17686.4444,
    _65_69: 20961.2789,
    _70_74: 24007.6437,
    _75_79: 27434.7594,
    _plus_80: 31623.5023,
  },
  _50000: {
    _0_17: 2534.9549915,
    _18_24: 3145.8575045,
    _25_29: 3643.980201,
    _30_34: 4363.53130375,
    _35_39: 5193.78477225,
    _40_44: 6002.17208575,
    _45_49: 7290.738245,
    _50_54: 8071.9757145,
    _55_59: 10285.974571,
    _60_64: 12776.7575055,
    _65_69: 15156.851611,
    _70_74: 17370.82955125,
    _75_79: 19861.5828395,
    _plus_80: 22905.89141575,
  },
  _20000: {
    _0_17: 1725.2365488,
    _18_24: 2047.1454136,
    _25_29: 2399.2489108,
    _30_34: 2907.8711272,
    _35_39: 3494.7425732,
    _40_44: 4066.1774928,
    _45_49: 4977.0131992,
    _50_54: 5529.26046,
    _55_59: 7094.2876948,
    _60_64: 8854.9344368,
    _65_69: 10537.3278556,
    _70_74: 12102.3386932,
    _75_79: 13862.962428,
    _plus_80: 16014.877506,
  },
  _40000: {
    _0_17: 1725.2365488,
    _18_24: 2047.1454136,
    _25_29: 2399.2489108,
    _30_34: 2907.8711272,
    _35_39: 3494.7425732,
    _40_44: 4066.1774928,
    _45_49: 4977.0131992,
    _50_54: 5529.26046,
    _55_59: 7094.2876948,
    _60_64: 8854.9344368,
    _65_69: 10537.3278556,
    _70_74: 12102.3386932,
    _75_79: 13862.962428,
    _plus_80: 16014.877506,
  },
};
const PLAN_META = {
  _100000: {
    name: 'Plan 1',
    color: 'text-blue-400',
    icon: <FaStar className="text-blue-400 text-2xl" />,
  },
  _50000: {
    name: 'Plan 2',
    color: 'text-gray-400',
    icon: <FaMedal className="text-gray-400 text-2xl" />,
  },
  _20000: {
    name: 'Plan 3',
    color: 'text-yellow-400',
    icon: <FaCrown className="text-yellow-400 text-2xl" />,
  },
  _30000: {
    name: 'Plan 4',
    color: 'text-yellow-400',
    icon: <FaCrown className="text-yellow-400 text-2xl" />,
  },
  _40000: {
    name: 'Plan 4',
    color: 'text-yellow-400',
    icon: <FaCrown className="text-yellow-400 text-2xl" />,
  },
};

const PremiumPlanSummaryByAge = () => {
  return (
    <div>
      <PlanAgeTable
        plans={plans}
        PLAN_META={PLAN_META}
        navigation={'/premium-package/coverage-details'}
      />
    </div>
  );
};

export default PremiumPlanSummaryByAge;
