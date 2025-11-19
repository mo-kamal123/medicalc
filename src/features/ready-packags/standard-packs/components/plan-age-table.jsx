import { useState, useEffect } from 'react';
import PlanCard from '../../../../shared/UI/plan-card';
import { Link } from 'react-router-dom';
import usePagination from '../../../../shared/hooks/usePagination';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addEmployeesAges } from '../../../../shared/store/employees-ages-slice';

const AGE_GROUP_MAPPINGS = [
  { display: '0-17', hyphen: '0-17', underscore: '_0_17' },
  { display: '18-24', hyphen: '18-24', underscore: '_18_24' },
  { display: '25-29', hyphen: '25-29', underscore: '_25_29' },
  { display: '30-34', hyphen: '30-34', underscore: '_30_34' },
  { display: '35-39', hyphen: '35-39', underscore: '_35_39' },
  { display: '40-44', hyphen: '40-44', underscore: '_40_44' },
  { display: '45-49', hyphen: '45-49', underscore: '_45_49' },
  { display: '50-54', hyphen: '50-54', underscore: '_50_54' },
  { display: '55-59', hyphen: '55-59', underscore: '_55_59' },
  { display: '60-64', hyphen: '60-64', underscore: '_60_64' },
  { display: '65-69', hyphen: '65-69', underscore: '_65_69' },
  { display: '70-74', hyphen: '70-74', underscore: '_70_74' },
  { display: '75-79', hyphen: '75-79', underscore: '_75_79' },
  { display: '80+', hyphen: '80+', underscore: '_plus_80' },
];

/**
 * PlanAgeTable Component
 *
 * Renders age distribution per plan for both summary (read-only) and custom
 * (editable) flows. Also syncs the data with Redux for later steps.
 */
const PlanAgeTable = ({ navigation, plans, PLAN_META, type = 'summary' }) => {
  const dispatch = useDispatch();

  const planKeys = Object.keys(PLAN_META);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const pageSize = 3;

  const pagePlans = usePagination(page, planKeys, pageSize);

  // ✅ Initialize manual values in { data: [{ name, employees: {...} }] } format
  const [manualValues, setManualValues] = useState(() => {
    const initialData = planKeys.map((planKey) => ({
      name: PLAN_META[planKey]?.name || planKey,
      employees: AGE_GROUP_MAPPINGS.reduce((acc, group) => {
        acc[group.underscore] = 0;
        return acc;
      }, {}),
    }));
    return { data: initialData };
  });

  // ✅ Check if manual data has any values
  const hasManualData = () => {
    if (type !== 'custom') return true;

    return manualValues.data.some((plan) =>
      Object.values(plan.employees).some((value) => value > 0)
    );
  };

  // ✅ Validate before navigation
  const handleNavigation = (e) => {
    if (type === 'custom' && !hasManualData()) {
      e.preventDefault();
      setError(
        'Please enter employee data for at least one age group before proceeding.'
      );
      return false;
    }
    setError('');
    return true;
  };

  // ✅ Update manual values when plans (Excel upload) change
  useEffect(() => {
    if (!plans || type !== 'custom') return;

    const updatedData = planKeys.map((planKey) => {
      const employees = AGE_GROUP_MAPPINGS.reduce((acc, group) => {
        const value =
          plans[planKey]?.[group.hyphen] ??
          plans[planKey]?.[group.underscore] ??
          0;
        acc[group.underscore] = value;
        return acc;
      }, {});
      return {
        name: PLAN_META[planKey]?.name || planKey,
        employees,
      };
    });

    const formatted = { data: updatedData };

    // 🔥 Prevent infinite loop:
    setManualValues((prev) => {
      const same = JSON.stringify(prev) === JSON.stringify(formatted);
      if (!same) {
        dispatch(addEmployeesAges(formatted));
        return formatted;
      }
      return prev;
    });
  }, [plans]);

  // ✅ Handle manual input updates
  const handleManualChange = (planName, ageKey, value) => {
    const numericValue = value === '' ? 0 : Number(value);

    setManualValues((prev) => {
      const updated = {
        data: prev.data.map((plan) =>
          plan.name === planName
            ? {
                ...plan,
                employees: {
                  ...plan.employees,
                  [ageKey]: numericValue,
                },
              }
            : plan
        ),
      };

      // Clear error when user starts entering data
      if (error && numericValue > 0) {
        setError('');
      }

      // Debug: surface granular updates to help troubleshoot manual editing issues
      console.log('PlanAgeTable::manual update payload', {
        planName,
        ageKey,
        numericValue,
      });
      console.log('PlanAgeTable::manual values snapshot', updated);

      dispatch(addEmployeesAges(updated));
      return updated;
    });
  };

  // ✅ Get value - for SUMMARY mode use plans prop, for CUSTOM mode use manualValues
  const getDisplayValue = (planKey, ageGroup) => {
    if (type === 'summary') {
      // For summary mode, get directly from plans prop
      if (!plans || !plans[planKey]) return 0;
      const value =
        plans[planKey][ageGroup.hyphen] ?? plans[planKey][ageGroup.underscore];
      return value ?? 0;
    } else {
      // For custom mode, get from manualValues
      const planName = PLAN_META[planKey]?.name;
      const plan = manualValues.data.find((p) => p.name === planName);
      return plan?.employees?.[ageGroup.underscore] ?? 0;
    }
  };

  const needsPagination = planKeys.length > pageSize;
  const isFirstPage = page === 1;
  const isLastPage = page * pageSize >= planKeys.length;

  // Debug: capture component level snapshot for QA
  console.log('PlanAgeTable Debug:', {
    type,
    plans,
    planKeys,
    PLAN_META,
    manualValues: type === 'custom' ? manualValues : 'N/A (summary mode)',
  });

  return (
    <div className="md:p-6 min-h-screen flex flex-col gap-5">
      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">{error}</span>
          </div>
        </div>
      )}

      {/* Pagination Controls */}
      {needsPagination && (
        <div className="flex justify-between items-center w-full gap-3 mb-4">
          <p className="text-main text-2xl font-semibold">
            Swap or use arrows to explore more plans
          </p>
          <div className="flex items-center gap-3">
            <button
              disabled={isFirstPage}
              className={`${
                isFirstPage ? 'bg-[#D8D8D8]' : 'bg-main'
              } text-white p-2 rounded transition-all duration-200`}
              onClick={() => setPage((prev) => prev - 1)}
            >
              <FaArrowLeft />
            </button>
            <button
              disabled={isLastPage}
              className={`${
                isLastPage ? 'bg-[#D8D8D8]' : 'bg-main'
              } text-white p-2 rounded transition-all duration-200`}
              onClick={() => setPage((prev) => prev + 1)}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-[720px] w-full border-separate border-spacing-4">
          <thead>
            <tr>
              {pagePlans.map((planKey) => (
                <th
                  key={planKey}
                  className="text-left font-medium text-gray-700"
                >
                  <PlanCard
                    header={{
                      icon: PLAN_META[planKey]?.icon,
                      title: PLAN_META[planKey]?.name,
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
            {AGE_GROUP_MAPPINGS.map((ageGroup) => (
              <tr key={ageGroup.underscore}>
                {pagePlans.map((planKey) => {
                  const displayValue = getDisplayValue(planKey, ageGroup);
                  const planName = PLAN_META[planKey]?.name;

                  return (
                    <td
                      key={planKey}
                      className="bg-white p-4 rounded-xl shadow font-semibold"
                    >
                      {type === 'custom' ? (
                        <input
                          type="number"
                          value={displayValue}
                          onChange={(e) =>
                            handleManualChange(
                              planName,
                              ageGroup.underscore,
                              e.target.value
                            )
                          }
                          className="w-full rounded-md p-2 focus:outline-none font-medium placeholder:text-sec border border-gray-200 text-center"
                          placeholder="0"
                          min="0"
                        />
                      ) : (
                        <div className="text-center text-sm md:text-lg">
                          {typeof displayValue === 'number'
                            ? displayValue.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })
                            : displayValue}
                        </div>
                      )}
                    </td>
                  );
                })}

                <td className="bg-white p-4 rounded-xl font-semibold shadow text-gray-800">
                  {ageGroup.display}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Navigation */}
      <div className="flex gap-5 justify-end w-full mb-10 mt-6">
        <Link
          to={-1}
          className="flex items-center justify-center gap-2 border-main text-main border px-5 py-2 rounded-xl hover:bg-main/10 transition-all"
        >
          Previous
        </Link>
        <Link
          to={navigation}
          onClick={handleNavigation}
          className={`flex items-center justify-center gap-2 px-5 py-2 rounded-xl transition-all ${
            type === 'custom' && !hasManualData()
              ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
              : 'bg-main text-white hover:bg-blue-700'
          }`}
        >
          Next Step
        </Link>
      </div>
    </div>
  );
};

export default PlanAgeTable;
