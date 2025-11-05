import { useSearchParams } from 'react-router-dom';
import HealthcareServices from '../../../shared/components/healthcare-services';
import { generatePlans } from '../utils/plan-genrator';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setHealthcareServices,
  updateHealthcareService,
} from '../store/custom-plan-slice';
import Breadcrumb from '../../../shared/UI/breadcrumb';

const CustomHealthcareServices = () => {
  const [searchParams] = useSearchParams();
  const count = Number(searchParams.get('count')) || 1;
  const dispatch = useDispatch();

  const { healthcareServices } = useSelector((state) => state.customPlan);

  // Default input structure (what the user can select)
  const baseInputs = [
    {
      label: 'Room Type',
      data: ['SHARED', 'PRIVATE', 'LUX'],
      placeholder: 'Room Type',
    },
    {
      label: 'Inpatient Copayment',
      data: ['0%', '5%', '10%', '15%'],
      placeholder: 'Inpatient Copayment',
    },
    {
      label: 'Outpatient Copayment',
      data: ['0%', '5%', '10%', '15%'],
      placeholder: 'Outpatient Copayment',
    },
    {
      label: 'Prescription Medicines Copayment',
      data: ['0%', '5%', '10%', '15%'],
      placeholder: 'Prescription Medicines Copayment',
    },
    {
      label: 'Dental Copayment',
      data: ['0%', '5%', '10%', '15%'],
      placeholder: 'Dental Copayment',
    },
    {
      label: 'Dental Money',
      data: ['EGP 500', 'EGP 750', 'EGP 1000'],
      placeholder: 'Dental Money',
    },
    {
      label: 'Optical Copayment',
      data: ['0%', '5%', '10%'],
      placeholder: 'Optical Copayment',
    },
    {
      label: 'Optical Annual Fees',
      data: ['EGP 500', 'EGP 750', 'EGP 1000'],
      placeholder: 'Optical Annual Fees',
    },
    {
      label: 'Physio Therapy Count',
      data: ['Sessions 12', 'Sessions 24', 'Covered'],
      placeholder: 'Physio Therapy Count',
    },
    {
      label: 'Chronic And Pre-existing',
      data: ['5,000', '10,000', '15,000', '20,000'],
      placeholder: 'Chronic And Pre-existing',
    },
    {
      label: 'Maternity Care',
      data: ['Wait 10 Month', '5,000', '10,000', '15,000'],
      placeholder: 'Maternity Care',
    },
  ];

  // Initialize empty healthcare plans if not already
  useEffect(() => {
    if (Object.keys(healthcareServices).length === 0) {
      const generatedArray = generatePlans(count);
      const generatedObject = generatedArray.reduce((acc, plan, i) => {
        acc[`plan${i + 1}`] = {};
        return acc;
      }, {});
      dispatch(setHealthcareServices(generatedObject));
    }
  }, [count, healthcareServices, dispatch]);

  // Handle field change
  const handleChange = (planName, key, value) => {
    dispatch(updateHealthcareService({ planName, key, value }));
  };

  // Build plans dynamically for <HealthcareServices />
  const plans = Array.from({ length: count }, (_, i) => {
    const planName = `plan${i + 1}`;
    const planData = healthcareServices[planName] || {};

    return {
      id: i + 1,
      header: { title: `Plan ${i + 1}` },
      inputs: baseInputs.map((input) => {
        const key = input.label.replace(/\s+/g, '').toLowerCase();
        return {
          label: input.label,
          data: input.data,
          placeholder: input.placeholder,
          defaultValue: planData[key] || '',
          onChange: (value) => handleChange(planName, key, value),
        };
      }),
    };
  });
  console.log(healthcareServices);
  const breadcrumbItems = [
    {
      title: 'Plan Data',
      url: `/custom-package/plan-data?count=${count}`,
      active: true,
    },
    {
      title: 'Healthcare Services',
      url: `/custom-package/healthcare-services?count=${count}`,
      active: true,
    },
    {
      title: 'Reimbursement Details',
      url: `/custom-package/reimbursement-details?count=${count}`,
      active: false,
    },
    {
      title: 'Plan Summary',
      url: `/custom-package/plan-summary?count=${count}`,
      active: false,
    },
    {
      title: 'Customize plan by age',
      url: `/custom-package/customize-plan-by-age?count=${count}`,
      active: false,
    },
    {
      title: 'Coverage & Expense Details',
      url: `/custom-package/coverage-details?count=${count}`,
      active: false,
    },
    {
      title: 'Installments',
      url: `/custom-package/installments?count=${count}`,
      active: false,
    },
    {
      title: 'Summary',
      url: `/custom-package/summary?count=${count}`,
      active: false,
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <Breadcrumb items={breadcrumbItems} />
      <HealthcareServices
        type="custom"
        plans={plans}
        nextNavigation={`/custom-package/reimbursement-details?count=${count}`}
        prevNavigation={`/custom-package/plan-data?count=${count}`}
      />
    </div>
  );
};

export default CustomHealthcareServices;
