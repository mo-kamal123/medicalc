import {
  FaPercentage,
  FaFileInvoiceDollar,
  FaArrowRight,
  FaArrowLeft,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PlanCard from '../UI/plan-card';
import usePagination from '../hooks/usePagination';
import useValidation from '../hooks/useValidation';
import { useDispatch, useSelector } from 'react-redux';

// Import all actions
import { updateReimbursement as updateStandardReimbursement } from '../../features/ready-packags/standard-packs/store/standard-plan-slice';
import { updateReimbursement as updatePremiumReimbursement } from '../../features/ready-packags/premium-packs/store/premium-plan-slice';
import { updateReimbursement as updateCustomReimbursement } from '../../features/costum-packages/store/custom-plan-slice';
import { transformData } from '../utils/formTransformation';

const Reimbursement = ({
  plans,
  planNames,
  packName,
  prevNavigation,
  nextNavigation,
  type,
}) => {
  const [page, setPage] = useState(1);
  const pageplans = usePagination(page, plans);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Get the right Redux data depending on type
  const reimbursementData = useSelector((state) => {
    if (type === 'premium') return state.premiumPlan.reimbursement;
    if (type === 'custom') return state.customPlan.reimbursement;
    return state.standardPlan.reimbursement; // default
  });
  // ✅ Get the right Redux data depending on type
  const formData = useSelector((state) => {
    if (type === 'premium') return state.premiumPlan;
    if (type === 'custom') return state.customPlan;
    return state.standardPlan; // default
  });

  // ✅ Use correct dispatch action per plan type
  const handleChange = (planName, key, value) => {
    if (type === 'premium')
      dispatch(updatePremiumReimbursement({ planName, key, value }));
    else if (type === 'custom')
      dispatch(updateCustomReimbursement({ planName, key, value }));
    else dispatch(updateStandardReimbursement({ planName, key, value }));
  };

  // ✅ Plan key detection logic
  const getPlanKey = (plan) => {
    const title =
      plan?.header?.title?.toLowerCase?.() ||
      plan?.title?.toLowerCase?.() ||
      '';

    if (title.includes('white')) return 'white';
    if (title.includes('silver')) return 'silver';
    if (title.includes('gold')) return 'gold';

    if (title.includes('1')) return 'planOne';
    if (title.includes('2')) return 'planTwo';
    if (title.includes('3')) return 'planThree';
    if (title.includes('4')) return 'planFour';

    return `plan${plan.id}`;
  };

  // ✅ Reimbursement input structure
  const planData = [
    {
      header: {
        icon: <FaPercentage className="text-green-500 text-2xl" />,
        title: 'Reimbursement Rate',
      },
      inputs: [
        {
          key: 'reimbursement',
          label: 'Reimbursement',
          data: [
            { title: '0%', value: '_0' },
            { title: '70%', value: '_70' },
            { title: '80%', value: '_80' },
            { title: '100%', value: '_100' },
          ],
          placeholder: 'Reimbursement',
        },
        {
          key: 'doctorVisitCopayment',
          label: 'Doctor Visit Copayment',
          data: [
            { title: '0%', value: '_0' },
            { title: '10%', value: '_10' },
            { title: '15%', value: '_15' },
            { title: '20%', value: '_20' },
          ],
          placeholder: 'Doctor Visit Copayment',
        },
        {
          key: 'doctorVisitMoney',
          label: 'Doctor Visit Money',
          data: [
            { title: 'EGP 100', value: '_100' },
            { title: 'EGP 150', value: '_150' },
            { title: 'EGP 200', value: '_200' },
            { title: 'EGP 300', value: '_300' },
            { title: 'EGP 400', value: '_400' },
          ],
          placeholder: 'Doctor Visit Money',
        },
      ],
    },
    {
      header: {
        icon: <FaFileInvoiceDollar className="text-purple-500 text-2xl" />,
        title: 'Reimbursement Details',
      },
      inputs: [
        {
          key: 'pricingTerms',
          label: 'Pricing Terms',
          placeholder: 'Pricing Terms',
          type: 'input',
        },
        {
          key: 'laboratoryAndScans',
          label: 'Laboratory and Scans',
          placeholder: 'Laboratory and Scans',
          type: 'input',
        },
        {
          key: 'paymentCycle',
          label: 'Payment Cycle',
          placeholder: 'Payment Cycle',
          type: 'input',
        },
      ],
    },
  ];

  // 🔥 BUILD VALIDATION DATA
  const validationPlans = pageplans.flatMap((plan) => {
    const planKey = getPlanKey(plan);

    return planData.map((section) => ({
      id: `${plan.id}-${section.header.title}`,
      inputs: section.inputs.map((input) => ({
        ...input,
        label: input.label,
        defaultValue: reimbursementData?.[planKey]?.[input.key] || '',
        placeholder: input.placeholder,
      })),
    }));
  });

  // 🔥 USE VALIDATION HOOK
  const { validateDropdowns, invalidFields, clearInvalidField } = useValidation(
    validationPlans,
    'defaultValue'
  );

  // 🔥 HANDLE NEXT WITH VALIDATION
  const handleNext = () => {
    if (validateDropdowns()) {
      navigate(nextNavigation);
    }
  };
  const data = transformData('mooo', packName, formData, planNames);
  console.log( packName, formData, planNames);
  console.log(data);
  // console.log(`${type} reimbursementData:`, reimbursementData);

  return (
    <div className="flex flex-col gap-6">
      {/* Pagination header */}
      {plans.length > 3 && (
        <div className="flex justify-between items-center w-full gap-3">
          <p className="text-main text-2xl font-semibold">
            Swap or use arrow to explore more program
          </p>
          <div className="flex items-center gap-3">
            <button
              disabled={pageplans[0].id === 1}
              className={`${
                pageplans[0].id === 1 ? 'bg-[#D8D8D8]' : 'bg-main'
              } text-white p-2 rounded`}
              onClick={() => setPage((prev) => prev - 1)}
            >
              <FaArrowLeft />
            </button>
            <button
              disabled={pageplans[pageplans.length - 1].id === plans.length}
              className={`${
                pageplans[pageplans.length - 1].id === plans.length
                  ? 'bg-[#D8D8D8]'
                  : 'bg-main'
              } text-white p-2 rounded`}
              onClick={() => setPage((prev) => prev + 1)}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}

      {/* Render plans */}
      <div className="grid grid-cols-3 gap-5">
        {pageplans.map((plan) => {
          const planKey = getPlanKey(plan);

          return (
            <div key={plan.id} className="flex flex-col gap-10">
              <PlanCard header={plan.header || plan} />

              {planData.map((data) => (
                <PlanCard
                  key={data.header.title}
                  header={data.header}
                  planId={`${plan.id}-${data.header.title}`}
                  invalidFields={invalidFields}
                  clearInvalidField={clearInvalidField}
                  inputs={data.inputs.map((input) => ({
                    ...input,
                    defaultValue:
                      reimbursementData?.[planKey]?.[input.key] || '',
                    onChange: (item) => handleChange(planKey, input.key, item),
                  }))}
                />
              ))}
            </div>
          );
        })}
      </div>

      {/* Navigation buttons */}
      <div className="flex gap-5 justify-end w-full mb-10">
        <button
          onClick={() => navigate(prevNavigation)}
          className="flex items-center justify-center gap-2 border-main text-main border px-5 py-2 rounded-xl"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="flex items-center justify-center gap-2 bg-main text-white px-5 py-2 rounded-xl"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Reimbursement;
