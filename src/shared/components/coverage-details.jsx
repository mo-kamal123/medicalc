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

/**
 * CoverageDetails Component
 *
 * Collects exception, exceed, critical and additional expense data before
 * triggering the pooled benefits calculation. Handles redirect guards, validation,
 * loading/error states and renders the summary response in a responsive grid.
 *
 * @param {Object} props
 * @param {string} props.nextPage - Route path the wizard should navigate to on success.
 * @returns {JSX.Element|null}
 */
const CoverageDetails = ({ nextPage }) => {
  const calculationId = useSelector((state) => state.client.calculationId);
  const employeesages = useSelector((state) => state.employeesAges);
  const navigate = useNavigate();
  // Debug: ensure employees ages exist before rendering the page
  console.log('CoverageDetails::employeesages', employeesages);
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

  // ✅ Initialize state BEFORE any conditional returns
  const [coverageState, setCoverageState] = useState({
    calculationId: calculationId || '',
    data: employeesages?.data ? [...employeesages.data] : [],
    exception: {
      servicescount: '',
      memberscount: '',
      total: '',
    },
    exceedmoney: {
      servicescount: '',
      memberscount: '',
      total: '',
    },
    critical: {
      servicescount: '',
      memberscount: '',
      total: '',
    },
    adminfees: '',
    cardMoney: '',
  });

  // ✅ Handlers to update state sections
  const updateSection = (section, key, value) => {
    setCoverageState((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  const updateExpense = (key, value) => {
    setCoverageState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // ✅ Define UI cards
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

  // ✅ Prepare validation plan
  const validationPlans = [
    ...planData.map((plan) => ({
      id: plan.header.title,
      inputs: plan.inputs.map((input) => ({
        ...input,
        defaultValue: coverageState[plan.sectionKey]?.[input.key] ?? '',
        placeholder: input.placeholder,
      })),
    })),
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

  // ✅ Initialize validation hook
  const { validateDropdowns, invalidFields, clearInvalidField } = useValidation(
    validationPlans,
    'defaultValue'
  );

  const handleSuccess = () => {
    // Debug: confirm calculation success
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
    // Debug: print current summary payload before submission
    console.log('CoverageDetails::handleNext current plans response:', plans);
    if (validateDropdowns()) {
      console.log(
        'CoverageDetails::handleNext ✅ Validation passed:',
        coverageState
      );
      calculateBenefits(coverageState);
    } else {
      console.warn('CoverageDetails::handleNext ❌ Validation failed');
    }
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
                    title: `${program.name} `,
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

        <div className="bg-white rounded-xl shadow-lg p-8 w-full mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-main">
            Overall Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Total Employees:</span>
              <span>{plans.summary.totalEmployees}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Pool per Employee:</span>
              <span>{plans.summary.poolPerEmployee.toFixed(2)} EGP</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Overall Total:</span>
              <span>{plans.summary.overallTotal.toFixed(2)} EGP</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Admin Fees %:</span>
              <span>{plans.summary.adminFeesPercent.toFixed(2)}%</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Admin Fees Amount:</span>
              <span>{plans.summary.adminFeesAmount.toFixed(2)} EGP</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Total Card Fees:</span>
              <span>{plans.summary.totalCardFees} EGP</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Total with Admin Fees:</span>
              <span className="font-bold text-main">
                {plans.summary.totalWithAdminFees.toFixed(2)} EGP
              </span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-semibold">Total Contract Amount:</span>
              <span className="font-bold text-main text-lg">
                {plans.summary.totalAmountOfContract.toFixed(2)} EGP
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }, [plans]);

  if (isInitialDataMissing) {
    return null;
  }
  // Add debugging
  console.log('CoverageDetails::Coverage State snapshot:', coverageState);
  console.log('CoverageDetails::Plans Response:', plans);
  console.log('CoverageDetails::isPending:', isPending);
  console.log('CoverageDetails::isError:', isError);

  return (
    <div>
      <h2 className="text-xl font-semibold my-5">Pooled Benefit Details</h2>

      {/* Exception / Exceed / Critical */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 w-full">
        {planData.map((plan) => (
          <div key={plan.header.title} className="flex-1">
            <PlanCard
              header={plan.header}
              invalidFields={invalidFields}
              clearInvalidField={clearInvalidField}
              planId={plan.header.title}
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

      {/* Additional Expenses */}
      <h2 className="text-xl font-semibold my-5">Additional Expenses</h2>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 w-full">
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
          inputs={[
            {
              label: 'Printed card price per person (EGP)',
              placeholder: 'Printed card price per person (EGP)',
              type: 'input',
              defaultValue: coverageState.cardMoney ?? '',
              onChange: (val) => updateExpense('cardMoney', val),
            },
            {
              label: 'Admin Fees',
              placeholder: 'Admin Fees',
              type: 'input',
              defaultValue: coverageState.adminfees ?? '',
              onChange: (val) => updateExpense('adminfees', val),
            },
          ]}
        />
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
          // If plans exist, show Next button
          <Link
            to={nextPage}
            className="flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-main hover:bg-main/90 text-white transition-all"
          >
            Next
          </Link>
        ) : (
          // If no plans, show Calculate Benefits button
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
