import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { generatePlans } from '../utils/plan-genrator';
import Reimbursement from '../../../shared/components/reimbursement';
import Breadcrumb from '../../../shared/UI/breadcrumb';

const CustomReimbursement = () => {
  const [searchParams] = useSearchParams();
  const count = Number(searchParams.get('count')) || 1;
  const [plans] = useState(generatePlans(count));
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
  
  const planNames = plans.map(plan => getPlanKey(plan.header.title))
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
      active: true,
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
  console.log(plans, planNames);
  return (
    <div className="flex flex-col gap-5">
      <Breadcrumb items={breadcrumbItems} />
      <Reimbursement
        type="custom"
        packName={'customPlans'}
        planNames={planNames}
        plans={plans}
        nextNavigation={`/custom-package/plan-by-age/summary?count=${count}`}
        prevNavigation={`/custom-package/healthcare-services?count=${count}`}
      />
    </div>
  );
};

export default CustomReimbursement;
