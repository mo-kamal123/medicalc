import { useState } from 'react';
import PlanCard from '../../../../shared/UI/plan-card';
import { Link } from 'react-router-dom';
import usePagination from '../../../../shared/hooks/usePagination';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const PlanAgeTable = ({ navigation, plans, PLAN_META }) => {
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

  const planKeys = Object.keys(PLAN_META);
  const [page, setPage] = useState(1);
  const pageSize = 4;

  // ✅ Paginated plan keys for current page
  const pagePlans = usePagination(page, planKeys, pageSize);

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

  // ✅ Check if prev/next buttons should be disabled
  const isFirstPage = page === 1;
  const isLastPage = page * pageSize >= planKeys.length;

  return (
    <div className="p-6 min-h-screen flex flex-col gap-5">
      {/* --- Pagination Controls --- */}
      {planKeys.length > pageSize && (
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

      {/* --- Table --- */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-4">
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
            {defaultAgeGroups.map((ageKey) => (
              <tr key={ageKey}>
                {pagePlans.map((planKey) => {
                  const value = plans?.[planKey]?.[ageKey];
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
                          className="w-full rounded-md p-2  focus:outline-none font-medium placeholder:text-sec"
                          placeholder="Enter value"
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

      {/* --- Navigation Buttons --- */}
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
