import { useState, useEffect } from 'react';
import { IoPrintOutline } from 'react-icons/io5';
import Dropdown from '../../../../shared/UI/drop-down';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../../shared/UI/breadcrumb';
import { useCalculateInstallments } from '../../../../shared/api/useCalculateInstallments';
import { useSelector } from 'react-redux';
import AsyncState from '../../../../shared/UI/async-state';

/**
 * Installments Component
 *
 * Fetches and renders the payment schedule for the selected calculation.
 * Handles loading/error states, allows users to switch between payment
 * frequencies, and keeps the UI responsive across screen sizes.
 *
 * @param {Object} props
 * @param {string} props.nextPage - Route path for the print/export step.
 * @returns {JSX.Element}
 */
const Installments = ({ nextPage, type }) => {
  const breadcrumbItems = [
    { title: 'Plan Data', url: `/${type}-package/plan-data`, active: true },
    {
      title: 'Healthcare Services',
      url: `/${type}-package/healthcare-services`,
      active: true,
    },
    {
      title: 'Reimbursement Details',
      url: `/${type}-package/reimbursement-details`,
      active: true,
    },
    {
      title: 'Plan Summary',
      url: `/${type}-package/plan-by-age/summary`,
      active: true,
    },
    {
      title: 'Customize plan by age',
      url: `/${type}-package/plan-by-age/summary`,
      active: true,
    },
    {
      title: 'Coverage & Expense Details',
      url: `/${type}-package/coverage-details`,
      active: true,
    },
    {
      title: 'Installments',
      url: `/${type}-package/installments`,
      active: true,
    },
    { title: 'Summary', url: `/${type}-package/summary`, active: false },
  ];

  // ---- Local State ----
  const [paymentFrequency, setPaymentFrequency] = useState('Annual');
  const [installmentsCount, setInstallmentsCount] = useState(1);
  const calculationId = useSelector(
    (state) => state.calculationResult.calculationId
  );
  // Debug: ensure calculation id exists before firing API calls
  console.log('Installments::calculationId', calculationId);
  // ---- API Hook ----
  const {
    mutate: calculateInstallments,
    data,
    isPending,
    isError,
    error,
  } = useCalculateInstallments();
  const [hasAttemptedFetching, setHasAttemptedFetching] = useState(false);

  const installmentsErrorMessage =
    error?.response?.data?.message ||
    error?.message ||
    'Unable to load installments. Please try again.';

  // ---- Trigger API when dropdown values change ----
  useEffect(() => {
    if (!calculationId) {
      return;
    }

    calculateInstallments({
      calculationId,
      installmentsCount,
    });
    setHasAttemptedFetching(true);
  }, [calculateInstallments, calculationId, installmentsCount]);

  // ---- Extract data from API ----
  const schedule = data?.installments || [];
  const totalAmount = data?.totalAmount ?? 0;

  // ---- Handlers for dropdowns ----
  const handleFrequencyChange = (value) => {
    setPaymentFrequency(value);
    // You can map frequency to installments count if needed
    // e.g. Annual = 1, SemiAnnual = 2
    if (value === 'Annual') setInstallmentsCount(1);
    if (value === 'SemiAnnual') setInstallmentsCount(2);
  };

  const handleInstallmentsCountChange = (value) => {
    setInstallmentsCount(Number(value));
  };

  if (!calculationId) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <p className="text-lg font-semibold text-red-600">
          Unable to find a calculation reference.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Please complete the previous steps to generate a new calculation
          before viewing installments.
        </p>
        <Link
          to={-1}
          className="inline-flex items-center justify-center gap-2 mt-6 px-4 py-2 rounded-lg bg-main text-white"
        >
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <div>
        <h3 className="text-2xl font-semibold">Installments</h3>

        <div className="bg-white p-5 my-5 rounded-xl flex flex-col gap-8">
          {/* Total Amount */}
          <div className="flex items-center justify-center">
            <div className="bg-main/10 py-8 px-8 rounded-xl">
              <h1 className="text-main text-4xl font-bold">
                EGP {totalAmount.toLocaleString()}
              </h1>
              <p className="text-sm text-sec font-semibold text-center">
                Total Amount of Contract
              </p>
            </div>
          </div>

          {/* Frequency + Count Dropdowns */}
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="flex flex-col gap-2 w-full ">
              <label className="text-sm text-dark font-semibold">
                Payment Frequency
              </label>
              <Dropdown
                data={['Annual', 'SemiAnnual']}
                defaultValue={paymentFrequency}
                placeholder={'Select payment frequency'}
                onChange={handleFrequencyChange}
              />
            </div>

            {/* <div className="flex flex-col gap-2 w-full md:w-1/2">
              <label className="text-sm text-dark font-semibold">
                Number Of Payments
              </label>
              <Dropdown
                data={['1', '2']}
                defaultValue={String(installmentsCount)}
                placeholder={'Select number of payments'}
                onChange={handleInstallmentsCountChange}
              />
            </div> */}
          </div>
        </div>
      </div>

      {/* Schedule Table */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Payment Schedule</h3>
        <div className="p-6 bg-white rounded-xl shadow-sm w-full">
          <AsyncState
            isLoading={isPending}
            isError={isError}
            errorMessage={installmentsErrorMessage}
            onRetry={() =>
              calculateInstallments({
                calculationId,
                installmentsCount,
              })
            }
            loadingText="Loading installments..."
            fullHeight
          >
            {schedule.length === 0 && hasAttemptedFetching ? (
              <p className="text-center text-gray-500">
                No installments found for the selected options.
              </p>
            ) : (
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:gap-5">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">
                    Amount (EGP)
                  </h4>
                  <div className="flex flex-col gap-4">
                    {schedule.map((item, idx) => (
                      <div
                        key={`${item.paymentNumber}-amount`}
                        className={`p-4 rounded-xl text-gray-800 text-center font-medium ${
                          idx % 2 === 0 ? 'bg-gray-50' : 'bg-yellow-50'
                        }`}
                      >
                        {item.amount.toLocaleString()}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Due Date</h4>
                  <div className="flex flex-col gap-4">
                    {schedule.map((item, idx) => (
                      <div
                        key={`${item.paymentNumber}-dueDate`}
                        className={`p-4 rounded-xl text-gray-800 text-center font-medium ${
                          idx % 2 === 0 ? 'bg-gray-50' : 'bg-yellow-50'
                        }`}
                      >
                        {item.dueDate}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">Payment</h4>
                  <div className="flex flex-col gap-4">
                    {schedule.map((item, idx) => (
                      <div
                        key={`${item.paymentNumber}-label`}
                        className={`p-4 rounded-xl text-gray-800 text-center font-medium ${
                          idx % 2 === 0 ? 'bg-gray-50' : 'bg-yellow-50'
                        }`}
                      >
                        Payment {item.paymentNumber}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </AsyncState>
        </div>
      </div>

      {/* Print Button */}
      <div className="flex justify-center my-5">
        <Link
          to={nextPage}
          className={`flex items-center justify-center gap-2 bg-main text-white px-6 py-3 rounded-xl ${
            isPending ? 'opacity-60 pointer-events-none' : ''
          }`}
        >
          <IoPrintOutline />
          Print Benefit Table
        </Link>
      </div>
    </div>
  );
};

export default Installments;
