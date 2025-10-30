import { useSearchParams } from 'react-router-dom';
import HealthcareServices from '../../../shared/components/healthcare-services';
import { generatePlans } from '../utils/plan-genrator';
import { useState } from 'react';

const CustomHealthcareServices = () => {
  const [searchParams] = useSearchParams();
  const count = Number(searchParams.get('count')) || 1;
  const [plans] = useState(generatePlans(count));

  return (
    <HealthcareServices
      plans={plans}
      nextNavigation={`/custom-package/reimbursement-details?count=${count}`}
      prevNavigation={`/custom-package/plan-data?count=${count}`}
    />
  );
};

export default CustomHealthcareServices;
