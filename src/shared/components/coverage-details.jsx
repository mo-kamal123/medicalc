import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaExclamationTriangle,
  FaChartLine,
  FaExclamationCircle,
  FaCrown,
  FaMedal,
  FaStar,
} from 'react-icons/fa';
import { CiCalculator1 } from 'react-icons/ci';
import PlanCard from '../UI/plan-card';
import useValidation from '../hooks/useValidation';
import { useSelector } from 'react-redux';
import { useCalculateBenefits } from '../api/useCalculateBenefits';
import AsyncState from '../UI/async-state';

const CoverageDetails = ({ nextPage }) => {
  const calculationId = useSelector((state) => state.client.calculationId);
  const employeesages = useSelector((state) => state.employeesAges);
  const navigate = useNavigate();

  console.log('CoverageDetails::employeesages', employeesages);
  console.warn('.........................' + employeesages);

  /* -----------------------------------------------
     🔥 REDIRECT GUARD - Must be BEFORE useState
  ------------------------------------------------ */
  useEffect(() => {
    if (
      !calculationId ||
      !employeesages?.data ||
      employeesages.data.length === 0
    ) {
      navigate('/', { replace: true });
    }
  }, [calculationId, employeesages, navigate]);

  // State for coverage details
  const [coverageState, setCoverageState] = useState({
    calculationId: calculationId || '',
    data: employeesages?.data ? [...employeesages.data] : [],
    exception: { servicescount: '0', memberscount: '0', total: '0' },
    exceedmoney: { servicescount: '0', memberscount: '0', total: '0' },
    critical: { servicescount: '0', memberscount: '0', total: '0' },
    adminfees: '18',
    cardMoney: '55',
  });

  // State for additional expense errors
  const [additionalErrors, setAdditionalErrors] = useState({
    cardMoney: '',
    adminfees: '',
  });

  // Handlers to update state sections
  const updateSection = (section, key, value) => {
    setCoverageState((prev) => ({
      ...prev,
      [section]: { ...prev[section], [key]: value },
    }));
  };

  const updateExpense = (key, value) => {
    setCoverageState((prev) => ({ ...prev, [key]: value }));

    // Validation logic
    setAdditionalErrors((prev) => {
      const errors = { ...prev };
      if (key === 'adminfees') {
        const fee = parseFloat(value);
        errors.adminfees = !value
          ? 'Admin Fees is required'
          : fee > 100
            ? 'Admin Fee cannot be more than 100 EGP'
            : '';
      } else if (key === 'cardMoney') {
        errors.cardMoney = !value ? 'Printed card price is required' : '';
      }
      return errors;
    });
  };

  // UI plan cards
  const planData = [
    {
      header: {
        icon: <FaExclamationTriangle className="text-orange-500 text-2xl" />,
        title: 'Exceptions Details',
      },
      sectionKey: 'exception',
      inputs: [
        {
          label: 'Number of services',
          key: 'servicescount',
          placeholder: 'Number of services',
        },
        {
          label: 'Percentage / Number of member',
          key: 'memberscount',
          placeholder: 'Percentage / Number of member',
        },
        { label: 'Total in EGP', key: 'total', placeholder: 'Total in EGP' },
      ],
    },
    {
      header: {
        icon: <FaChartLine className="text-red-500 text-2xl" />,
        title: 'Exceeded Maximum Limit',
      },
      sectionKey: 'exceedmoney',
      inputs: [
        {
          label: 'Number of services',
          key: 'servicescount',
          placeholder: 'Number of services',
        },
        {
          label: 'Percentage / Number of member',
          key: 'memberscount',
          placeholder: 'Percentage / Number of member',
        },
        { label: 'Total in EGP', key: 'total', placeholder: 'Total in EGP' },
      ],
    },
    {
      header: {
        icon: <FaExclamationCircle className="text-red-600 text-2xl" />,
        title: 'Critical Case',
      },
      sectionKey: 'critical',
      inputs: [
        {
          label: 'Number of services',
          key: 'servicescount',
          placeholder: 'Number of services',
        },
        {
          label: 'Percentage / Number of member',
          key: 'memberscount',
          placeholder: 'Percentage / Number of member',
        },
        { label: 'Total in EGP', key: 'total', placeholder: 'Total in EGP' },
      ],
    },
  ];

  const validationPlans = [
    {
      id: 'Additional Expenses',
      inputs: [
        {
          label: 'Printed card price per person (EGP)',
          defaultValue: coverageState.cardMoney ?? '',
        },
        { label: 'Admin Fees', defaultValue: coverageState.adminfees ?? '' },
      ],
    },
  ];

  const { validateDropdowns, invalidFields, clearInvalidField } = useValidation(
    validationPlans,
    'defaultValue'
  );

  const handleSuccess = () => {
    console.log(
      'CoverageDetails::handleSuccess ✅ Benefits calculation successful!'
    );
    // navigate(nextPage);
  };

  const {
    mutate: calculateBenefits,
    data: plans,
    isPending,
    isError,
    error,
  } = useCalculateBenefits(handleSuccess);

  const isInitialDataMissing =
    !calculationId || !employeesages?.data || employeesages.data.length === 0;

  const summaryErrorMessage =
    error?.response?.data?.message ||
    error?.message ||
    'Error calculating benefits. Please try again.';

  const handleNext = () => {
    // Validate additional expenses
    const hasErrors = Object.values(additionalErrors).some((err) => err);
    if (!validateDropdowns() || hasErrors) {
      console.warn(
        'CoverageDetails::handleNext ❌ Validation failed',
        additionalErrors
      );
      return;
    }

    console.log(
      'CoverageDetails::handleNext ✅ Validation passed:',
      coverageState
    );
    calculateBenefits(coverageState);
  };

  const renderPlanSummary = useMemo(() => {
    if (!plans) {
      return (
        <div className="flex flex-col items-center justify-center gap-3 text-center text-gray-500 py-10">
          <p className="text-lg font-medium text-dark">No summary yet</p>
          <p className="text-sm max-w-xl">
            Fill in the coverage details above and click &quot;Calculate
            Benefits&quot; to preview the generated programs summary.
          </p>
        </div>
      );
    }

    return (
      <div className="my-10">
        <h2 className="text-2xl font-semibold mb-6 text-main">
          Coverage Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full mb-10">
          {plans.programs.map((program, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-4 bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="w-full">
                <PlanCard
                  header={{
                    icon:
                      program.name.toLowerCase() === 'gold' ? (
                        <FaCrown className="text-yellow-400 text-2xl" />
                      ) : program.name.toLowerCase() === 'silver' ? (
                        <FaMedal className="text-gray-400 text-2xl" />
                      ) : (
                        <FaStar className="text-blue-400 text-2xl" />
                      ),
                    title: `${program.name.charAt(0).toUpperCase() + program.name.slice(1).toLowerCase()} `,
                  }}
                />
              </div>
              <div className="w-full bg-[#06A535] text-white text-center py-3 rounded-xl font-semibold">
                Employees: {program.employees}
              </div>
              <div className="w-full bg-[#CA8A04] text-white text-center py-3 rounded-xl font-semibold">
                Pool / Employee: {program.poolPerEmployee.toFixed(2)} EGP
              </div>
              <div className="w-full bg-[#0044BE] text-white text-center py-3 rounded-xl font-semibold">
                Total with Pool: {program.totalWithPool.toFixed(2)} EGP
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }, [plans]);

  if (isInitialDataMissing) return null;

  console.log('CoverageDetails::Coverage State snapshot:', coverageState);
  console.log('CoverageDetails::Plans Response:', plans);
  console.log('CoverageDetails::isPending:', isPending);
  console.log('CoverageDetails::isError:', isError);

  return (
    <div>
      <h2 className="text-xl font-semibold my-5">Pooled Benefit Details</h2>

      {/* Exception / Exceed / Critical - NOT REQUIRED */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 w-full">
        {planData.map((plan) => (
          <div key={plan.header.title} className="flex-1">
            <PlanCard
              header={plan.header}
              inputs={plan.inputs.map((input) => ({
                ...input,
                type: 'input',
                defaultValue: coverageState[plan.sectionKey]?.[input.key] ?? '',
                onChange: (val) =>
                  updateSection(plan.sectionKey, input.key, val),
              }))}
            />
          </div>
        ))}
      </div>

      {/* Additional Expenses - REQUIRED */}
      <h2 className="text-xl font-semibold my-5">Additional Expenses</h2>
      <div className="w-full">
        <PlanCard
          header={{
            icon: (
              <FaExclamationTriangle className="text-orange-500 text-2xl" />
            ),
            title: 'Additional Expenses',
          }}
          planId="Additional Expenses"
          invalidFields={invalidFields}
          clearInvalidField={clearInvalidField}
          inputs={[]}
        >
          <div className="flex flex-row gap-5 w-full">
            {/* Printed Card Price */}
            <div className="w-full flex flex-col">
              <input
                type="text"
                placeholder="Printed card price per person (EGP)"
                value={coverageState.cardMoney ?? ''}
                onChange={(e) => updateExpense('cardMoney', e.target.value)}
                className={`w-full px-4 py-2 border rounded-xl bg-white text-sec text-sm shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none ${
                  additionalErrors.cardMoney
                    ? 'border-red-500'
                    : 'border-gray-300 focus:border-main'
                }`}
              />
              {additionalErrors.cardMoney && (
                <span className="text-red-500 text-sm mt-1">
                  {additionalErrors.cardMoney}
                </span>
              )}
            </div>

            {/* Admin Fees */}
            <div className="w-full flex flex-col">
              <input
                type="text"
                placeholder="Admin Fees"
                value={coverageState.adminfees ?? ''}
                onChange={(e) => updateExpense('adminfees', e.target.value)}
                className={`w-full px-4 py-2 border rounded-xl bg-white text-sec text-sm shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none ${
                  additionalErrors.adminfees
                    ? 'border-red-500'
                    : 'border-gray-300 focus:border-main'
                }`}
              />
              {additionalErrors.adminfees && (
                <span className="text-red-500 text-sm mt-1">
                  {additionalErrors.adminfees}
                </span>
              )}
            </div>
          </div>
        </PlanCard>
      </div>

      <AsyncState
        isLoading={isPending}
        isError={isError}
        errorMessage={summaryErrorMessage}
        onRetry={handleNext}
        loadingText="Calculating benefits..."
        fullHeight
        className="mt-10"
      >
        {renderPlanSummary}
      </AsyncState>

      {/* Navigation */}
      <div className="flex gap-5 justify-end w-full my-10">
        <Link
          to={-1}
          className="flex items-center justify-center gap-2 border-main text-main border px-5 py-2 rounded-xl hover:bg-main/10 transition-all"
        >
          Previous
        </Link>

        {plans ? (
          <Link
            to={nextPage}
            className="flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-main hover:bg-main/90 text-white transition-all"
          >
            Next
          </Link>
        ) : (
          <button
            onClick={handleNext}
            disabled={isPending}
            className={`flex items-center justify-center gap-2 px-5 py-2 rounded-xl transition-all ${
              isPending
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-main hover:bg-main/90 text-white'
            }`}
          >
            <CiCalculator1 />
            {isPending ? 'Calculating...' : 'Calculate Benefits'}
          </button>
        )}
      </div>
    </div>
  );
};

export default CoverageDetails;
