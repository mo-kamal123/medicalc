import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { generatePlans } from '../utils/plan-genrator';
import Reimbursement from '../../../shared/components/reimbursement';
import Breadcrumb from '../../../shared/UI/breadcrumb';

const CustomReimbursement = () => {
  const [searchParams] = useSearchParams();
  const count = Number(searchParams.get('count')) || 1;
  const [plans] = useState(generatePlans(count));

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
  return (
    <div className="flex flex-col gap-5">
      <Breadcrumb items={breadcrumbItems} />
      <Reimbursement
        type="custom"
        plans={plans}
        nextNavigation={`/custom-package/plan-by-age/summary?count=${count}`}
        prevNavigation={`/custom-package/healthcare-services?count=${count}`}
      />
    </div>
  );
};

export default CustomReimbursement;
