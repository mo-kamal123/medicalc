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

  const baseInputs = [
    {
      label: 'Room Type',
      data: [
        { title: 'SHARED', value: 'SHARED' },
        { title: 'PRIVATE', value: 'PRIVATE' },
        { title: 'LUX', value: 'LUX' },
      ],
      placeholder: 'Room Type',
    },
    {
      label: 'Inpatient Copayment',
      data: [
        { title: '0%', value: '0%' },
        { title: '5%', value: '5%' },
        { title: '10%', value: '10%' },
        { title: '15%', value: '15%' },
      ],
      placeholder: 'Inpatient Copayment',
    },
    {
      label: 'Outpatient Copayment',
      data: [
        { title: '0%', value: '0%' },
        { title: '5%', value: '5%' },
        { title: '10%', value: '10%' },
        { title: '15%', value: '15%' },
      ],
      placeholder: 'Outpatient Copayment',
    },
    {
      label: 'Prescription Medicines Copayment',
      data: [
        { title: '0%', value: '0%' },
        { title: '5%', value: '5%' },
        { title: '10%', value: '10%' },
        { title: '15%', value: '15%' },
      ],
      placeholder: 'Prescription Medicines Copayment',
    },
    {
      label: 'Dental Copayment',
      data: [
        { title: '0%', value: '0%' },
        { title: '5%', value: '5%' },
        { title: '10%', value: '10%' },
        { title: '15%', value: '15%' },
      ],
      placeholder: 'Dental Copayment',
    },
    {
      label: 'Dental Money',
      data: [
        { title: 'EGP 500', value: 'EGP 500' },
        { title: 'EGP 750', value: 'EGP 750' },
        { title: 'EGP 1000', value: 'EGP 1000' },
      ],
      placeholder: 'Dental Money',
    },
    {
      label: 'Optical Copayment',
      data: [
        { title: '0%', value: '0%' },
        { title: '5%', value: '5%' },
        { title: '10%', value: '10%' },
      ],
      placeholder: 'Optical Copayment',
    },
    {
      label: 'Optical Annual Fees',
      data: [
        { title: 'EGP 500', value: 'EGP 500' },
        { title: 'EGP 750', value: 'EGP 750' },
        { title: 'EGP 1000', value: 'EGP 1000' },
      ],
      placeholder: 'Optical Annual Fees',
    },
    {
      label: 'Physio Therapy Count',
      data: [
        { title: 'Sessions 12', value: 'Sessions 12' },
        { title: 'Sessions 24', value: 'Sessions 24' },
        { title: 'Covered', value: 'Covered' },
      ],
      placeholder: 'Physio Therapy Count',
    },
    {
      label: 'Chronic And Pre-existing',
      data: [
        { title: '5,000', value: '5,000' },
        { title: '10,000', value: '10,000' },
        { title: '15,000', value: '15,000' },
        { title: '20,000', value: '20,000' },
      ],
      placeholder: 'Chronic And Pre-existing',
    },
    {
      label: 'Maternity Care',
      data: [
        { title: 'Wait 10 Month', value: 'Wait 10 Month' },
        { title: '5,000', value: '5,000' },
        { title: '10,000', value: '10,000' },
        { title: '15,000', value: '15,000' },
      ],
      placeholder: 'Maternity Care',
    },
  ];

  // Get plan name from title
  const getPlanKey = (title) => {
    const lower = title?.toLowerCase?.() || '';
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

  //Initialize empty healthcare plans if not already
  useEffect(() => {
    if (Object.keys(healthcareServices).length === 0) {
      const generatedArray = generatePlans(count);
      const generatedObject = generatedArray.reduce((acc, plan, i) => {
        const title = `Plan ${i + 1}`;
        acc[getPlanKey(title)] = {};
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
      header: { title: `plan${i + 1}` },
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
