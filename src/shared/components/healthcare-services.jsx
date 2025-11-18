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

  const healthcareData = useSelector((state) => {
    if (type === 'premium') return state.premiumPlan.healthcareServices;
    if (type === 'custom') return state.customPlan.healthcareServices;
    return state.standardPlan.healthcareServices;
  });

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
          data: [
            { title: 'LUX', value: 'LUX' },
            { title: 'PRIVATE', value: 'PRIVATE' },
            { title: 'SHARED', value: 'SHARED' },
          ],
          placeholder: 'Room Type',
        },
        {
          key: 'inpatientCopayment',
          label: 'Inpatient Copayment',
          data: [
            { title: '0%', value: '_0' },
            { title: '5%', value: '_5' },
            { title: '10%', value: '_10' },
            { title: '15%', value: '_15' },
          ],
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
          data: [
            { title: '0%', value: '_0' },
            { title: '10%', value: '_10' },
            { title: '15%', value: '_15' },
            { title: '20%', value: '_20' },
          ],
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
          data: [
            { title: '0%', value: '_0' },
            { title: '10%', value: '_10' },
            { title: '15%', value: '_15' },
            { title: '20%', value: '_20' },
            { title: '25%', value: '_25' },
          ],
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
          data: [
            { title: '0%', value: '_0' },
            { title: '10%', value: '_10' },
            { title: '20%', value: '_20' },
            { title: '30%', value: '_30' },
          ],
          placeholder: 'Dental Copayment',
        },
        {
          key: 'dentalMoney',
          label: 'Dental Money',
          data: [
            { title: 'Excluded', value: '_Excluded' },
            { title: 'EGP 300', value: '_300' },
            { title: 'EGP 500', value: '_500' },
            { title: 'EGP 700', value: '_700' },
            { title: 'EGP 750', value: '_750' },
            { title: 'EGP 1,000', value: '_1000' },
            { title: 'EGP 1,500', value: '_1500' },
            { title: 'EGP 2,000', value: '_2000' },
            { title: 'EGP 2,500', value: '_2500' },
            { title: 'EGP 3,000', value: '_3000' },
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
          data: [
            { title: '0%', value: '_0' },
            { title: '10%', value: '_10' },
            { title: '20%', value: '_20' },
            { title: '30%', value: '_30' },
          ],
          placeholder: 'Optical Copayment',
        },
        {
          key: 'opticalAnnualFees',
          label: 'Optical Annual Fees',
          data: [
            { title: 'Excluded', value: '_Excluded' },
            { title: 'EGP 300', value: '_300' },
            { title: 'EGP 500', value: '_500' },
            { title: 'EGP 700', value: '_700' },
            { title: 'EGP 750', value: '_750' },
            { title: 'EGP 1,000', value: '_1000' },
            { title: 'EGP 1,500', value: '_1500' },
            { title: 'EGP 2,000', value: '_2000' },
            { title: 'EGP 2,500', value: '_2500' },
            { title: 'EGP 3,000', value: '_3000' },
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
          data: [
            { title: 'Covered', value: '_Covered' },
            { title: 'Sessions 12', value: '_12' },
            { title: 'Sessions 24', value: '_24' },
            { title: 'Sessions 36', value: '_36' },
          ],
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
            { title: 'Excluded', value: '_Excluded' },
            { title: '2,500', value: '_2500' },
            { title: '5,000', value: '_5000' },
            { title: '7,500', value: '_7500' },
            { title: '10,000', value: '_10000' },
            { title: '15,000', value: '_15000' },
            { title: '20,000', value: '_20000' },
            { title: '25,000', value: '_25000' },
            { title: '30,000', value: '_30000' },
            { title: '40,000', value: '_40000' },
            { title: '50,000', value: '_50000' },
            { title: '75,000', value: '_75000' },
            { title: '100,000', value: '_100000' },
            { title: '150,000', value: '_150000' },
            { title: '200,000', value: '_200000' },
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
            { title: 'Excluded', value: '_Excluded' },
            { title: 'Wait 10 Month', value: 'Wait10Month' }, // ← Fixed typo from _value to value
            { title: '3,000', value: '_3000' },
            { title: '5,000', value: '_5000' },
            { title: '7,000', value: '_7000' },
            { title: '10,000', value: '_10000' },
            { title: '15,000', value: '_15000' },
          ],
          placeholder: 'Maternity Care',
        },
      ],
    },
  ];

  // Get plan name from title
  const getPlanKey = (title) => {
    // if (type === 'custom') return title; // For custom, use exact title like "Plan 1"

    const lower = title?.toLowerCase?.() || '';
    if (lower.includes('white')) return 'white';
    if (lower.includes('silver')) return 'silver';
    if (lower.includes('gold')) return 'gold';
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

  const { validateDropdowns, invalidFields, clearInvalidField } = useValidation(
    validationPlans,
    'defaultValue'
  );

  const handleNext = () => {
    if (validateDropdowns()) {
      navigate(nextNavigation);
    }
  };

  console.log('Healthcare Data:', healthcareData);

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

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 md:gap-5">
        {pageplans.map((plan) => {
          const planKey = getPlanKey(plan.header?.title || plan.title);
          console.log(planKey);
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
                    defaultValue: healthcareData?.[planKey]?.[input.key] || '',
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
