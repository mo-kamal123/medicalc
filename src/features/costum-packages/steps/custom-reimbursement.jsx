import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { generatePlans } from '../utils/plan-genrator';
import Reimbursement from '../../../shared/components/reimbursement';

const CustomReimbursement = () => {
  const [searchParams] = useSearchParams();
  const count = Number(searchParams.get('count')) || 1;
  const [plans] = useState(generatePlans(count));

  return (
    <Reimbursement
      plans={plans}
      nextNavigation={`/custom-package/plan-by-age/summary?count=${count}`}
      prevNavigation={`/custom-package/healthcare-services?count=${count}`}
    />
  );
};

export default CustomReimbursement;
