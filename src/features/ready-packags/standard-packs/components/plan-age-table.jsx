import { useState } from 'react';
import { FaCrown, FaMedal, FaStar } from 'react-icons/fa';
import PlanCard from '../../../../shared/UI/plan-card';
import { Link } from 'react-router-dom';

const PLAN_META = {
  _100000: {
    name: 'White Plan',
    color: 'text-blue-400',
    icon: <FaStar className="text-blue-400 text-2xl" />,
  },
  _50000: {
    name: 'Silver Plan',
    color: 'text-gray-400',
    icon: <FaMedal className="text-gray-400 text-2xl" />,
  },
  _20000: {
    name: 'Gold Plan',
    color: 'text-yellow-400',
    icon: <FaCrown className="text-yellow-400 text-2xl" />,
  },
};

const PlanAgeTable = ({ navigation, plans }) => {
  // Fallback: if no plans are passed, define empty plan keys and age groups
  const defaultPlanKeys = Object.keys(PLAN_META);
  const defaultAgeGroups = [
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

  // Use provided plans or undefined
  const hasPlans = !!plans;
  const planKeys = hasPlans ? Object.keys(plans) : defaultPlanKeys;
  const ageGroups = hasPlans
    ? Object.keys(plans[planKeys[0]])
    : defaultAgeGroups;

  // Local state for manual entries
  const [manualValues, setManualValues] = useState({});

  const handleManualChange = (planKey, ageKey, value) => {
    setManualValues((prev) => ({
      ...prev,
      [planKey]: {
        ...prev[planKey],
        [ageKey]: value,
      },
    }));
  };

  return (
    <div className="p-6 min-h-screen">
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-4">
          <thead>
            <tr>
              {planKeys.map((planKey) => (
                <th
                  key={planKey}
                  className="text-left font-medium text-gray-700"
                >
                  <PlanCard
                    header={{
                      icon: PLAN_META[planKey]?.icon,
                      title: PLAN_META[planKey]?.name || planKey,
                    }}
                  />
                </th>
              ))}
              <th className="text-left font-semibold bg-white p-7 rounded-xl shadow text-gray-700">
                Age Group
              </th>
            </tr>
          </thead>

          <tbody>
            {ageGroups.map((ageKey, idx) => (
              <tr key={idx}>
                {planKeys.map((planKey) => {
                  const value = hasPlans ? plans[planKey][ageKey] : undefined;
                  const manualValue = manualValues?.[planKey]?.[ageKey] ?? '';

                  return (
                    <td
                      key={planKey}
                      className="bg-white p-4 rounded-xl shadow font-semibold"
                    >
                      {value !== undefined ? (
                        value.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      ) : (
                        <input
                          type="number"
                          value={manualValue}
                          onChange={(e) =>
                            handleManualChange(planKey, ageKey, e.target.value)
                          }
                          className="w-full rounded-md p-2  focus:outline-none focus:ring focus:ring-main placeholder:text-sec"
                          placeholder="Enter employees"
                        />
                      )}
                    </td>
                  );
                })}

                <td className="bg-white p-4 rounded-xl font-semibold shadow text-gray-800">
                  {ageKey
                    .replace(/^_/, '')
                    .replace('_plus_', '80+')
                    .replace(/_(\d+)/g, '-$1')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-5 justify-end w-full mb-10 mt-6">
        <Link
          to={-1}
          className="flex items-center justify-center gap-2 border-main text-main border px-5 py-2 rounded-xl"
        >
          Previous
        </Link>
        <Link
          to={navigation}
          className="flex items-center justify-center gap-2 bg-main text-white px-5 py-2 rounded-xl"
        >
          Next Step
        </Link>
      </div>
    </div>
  );
};

export default PlanAgeTable;
