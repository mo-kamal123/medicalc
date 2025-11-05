import {
  FaArrowLeft,
  FaArrowRight,
  FaHospital,
  FaUserInjured,
  FaPills,
  FaTooth,
  FaEye,
  FaRunning,
  FaHeartbeat,
  FaBaby,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PlanCard from '../UI/plan-card';
import { useState } from 'react';
import usePagination from '../hooks/usePagination';
import useValidation from '../hooks/useValidation';
import { useDispatch, useSelector } from 'react-redux';

// import actions from all slices
import { updateHealthcareService as updateStandardHealthcare } from '../../features/ready-packags/standard-packs/store/standard-plan-slice';
import { updateHealthcareService as updatePremiumHealthcare } from '../../features/ready-packags/premium-packs/store/premium-plan-slice';
import { updateHealthcareService as updateCustomHealthcare } from '../../features/costum-packages/store/custom-plan-slice';

const HealthcareServices = ({
  plans,
  prevNavigation,
  nextNavigation,
  type = 'standard',
}) => {
  const [page, setPage] = useState(1);
  const pageplans = usePagination(page, plans);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get correct slice state
  const healthcareData = useSelector((state) => {
    if (type === 'premium') return state.premiumPlan.healthcareServices;
    if (type === 'custom') return state.customPlan.healthcareServices;
    return state.standardPlan.healthcareServices;
  });

  // Get correct update action based on type
  const updateAction =
    type === 'premium'
      ? updatePremiumHealthcare
      : type === 'custom'
        ? updateCustomHealthcare
        : updateStandardHealthcare;

  const handleChange = (planName, key, value) => {
    dispatch(updateAction({ planName, key, value }));
  };

  const planData = [
    {
      header: {
        icon: <FaHospital className="text-blue-500 text-2xl" />,
        title: 'Hospital & Inpatient Care',
      },
      inputs: [
        {
          key: 'roomType',
          label: 'Room Type',
          data: ['LUX', 'PRIVATE', 'SHARED'],
          placeholder: 'Room Type',
        },
        {
          key: 'inpatientCopayment',
          label: 'Inpatient Copayment',
          data: ['0%', '5%', '10%', '15%'],
          placeholder: 'Inpatient Copayment',
        },
      ],
    },
    {
      header: {
        icon: <FaUserInjured className="text-green-500 text-2xl" />,
        title: 'Outpatient Services',
      },
      inputs: [
        {
          key: 'outpatientCopayment',
          label: 'Outpatient Copayment',
          data: ['0%', '10%', '15%', '20%'],
          placeholder: 'Outpatient Copayment',
        },
      ],
    },
    {
      header: {
        icon: <FaPills className="text-purple-500 text-2xl" />,
        title: 'Prescription Medicines',
      },
      inputs: [
        {
          key: 'prescriptionMedicinesCopayment',
          label: 'Prescription Medicines Copayment',
          data: ['0%', '10%', '15%', '20%', '25%'],
          placeholder: 'Prescription Medicines Copayment',
        },
      ],
    },
    {
      header: {
        icon: <FaTooth className="text-teal-500 text-2xl" />,
        title: 'Dental Care',
      },
      inputs: [
        {
          key: 'dentalCopayment',
          label: 'Dental Copayment',
          data: ['0%', '10%', '20%', '30%'],
          placeholder: 'Dental Copayment',
        },
        {
          key: 'dentalMoney',
          label: 'Dental Money',
          data: [
            'Excluded',
            'EGP 300',
            'EGP 500',
            'EGP 700',
            'EGP 750',
            'EGP 1,000',
            'EGP 1,500',
            'EGP 2,000',
            'EGP 2,500',
            'EGP 3,000',
          ],
          placeholder: 'Dental Money',
        },
      ],
    },
    {
      header: {
        icon: <FaEye className="text-blue-400 text-2xl" />,
        title: 'Optical Care',
      },
      inputs: [
        {
          key: 'opticalCopayment',
          label: 'Optical Copayment',
          data: ['0%', '10%', '20%', '30%'],
          placeholder: 'Optical Copayment',
        },
        {
          key: 'opticalAnnualFees',
          label: 'Optical Annual Fees',
          data: [
            'Excluded',
            'EGP 300',
            'EGP 500',
            'EGP 700',
            'EGP 750',
            'EGP 1,000',
            'EGP 1,500',
            'EGP 2,000',
            'EGP 2,500',
            'EGP 3,000',
          ],
          placeholder: 'Optical Annual Fees',
        },
      ],
    },
    {
      header: {
        icon: <FaRunning className="text-orange-500 text-2xl" />,
        title: 'Physical Therapy',
      },
      inputs: [
        {
          key: 'physioTherapyCount',
          label: 'Physio Therapy Count',
          data: ['Covered', 'Sessions 12', 'Sessions 24', 'Sessions 36'],
          placeholder: 'Physio Therapy Count',
        },
      ],
    },
    {
      header: {
        icon: <FaHeartbeat className="text-red-500 text-2xl" />,
        title: 'Chronic & Pre-existing Conditions',
      },
      inputs: [
        {
          key: 'chronicAndPreExisting',
          label: 'Chronic And Pre Existing',
          data: [
            'Excluded',
            '2,500',
            '5,000',
            '7,500',
            '10,000',
            '15,000',
            '20,000',
            '25,000',
            '30,000',
            '40,000',
            '50,000',
            '75,000',
            '100,000',
            '150,000',
            '200,000',
          ],
          placeholder: 'Chronic And Pre Existing',
        },
      ],
    },
    {
      header: {
        icon: <FaBaby className="text-pink-500 text-2xl" />,
        title: 'Maternity Care',
      },
      inputs: [
        {
          key: 'maternityCare',
          label: 'Maternity Care',
          data: [
            'Excluded',
            'Wait 10 Month',
            '3,000',
            '5,000',
            '7,000',
            '10,000',
            '15,000',
          ],
          placeholder: 'Maternity Care',
        },
      ],
    },
  ];

  // Plan name detection
  const getPlanKey = (title, id) => {
    const lower = title?.toLowerCase?.() || '';
    if (type === 'custom') return `plan${id}`;
    if (lower.includes('white')) return 'whitePlan';
    if (lower.includes('silver')) return 'silverPlan';
    if (lower.includes('gold')) return 'goldPlan';
    if (lower.includes('1')) return 'planOne';
    if (lower.includes('2')) return 'planTwo';
    if (lower.includes('3')) return 'planThree';
    if (lower.includes('4')) return 'planFour';
    return `plan${id}`;
  };

  // 🔥 BUILD VALIDATION DATA
  // Transform healthcare plans into validation-friendly format
  const validationPlans = pageplans.flatMap((plan) => {
    const planKey = getPlanKey(plan.header?.title || plan.title, plan.id);

    return planData.map((section) => ({
      id: `${plan.id}-${section.header.title}`,
      inputs: section.inputs.map((input) => ({
        ...input,
        label: input.label,
        defaultValue: healthcareData?.[planKey]?.[input.key] || '',
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

  return (
    <div className="flex flex-col gap-6">
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
              } text-white p-2 rounded transition-all duration-200`}
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
              } text-white p-2 rounded transition-all duration-200`}
              onClick={() => setPage((prev) => prev + 1)}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-5">
        {pageplans.map((plan) => {
          const planKey = getPlanKey(plan.header?.title || plan.title, plan.id);

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
                      healthcareData?.[planKey]?.[input.key] ||
                      input.placeholder,
                    onChange: (item) => handleChange(planKey, input.key, item),
                  }))}
                />
              ))}
            </div>
          );
        })}
      </div>

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

export default HealthcareServices;
