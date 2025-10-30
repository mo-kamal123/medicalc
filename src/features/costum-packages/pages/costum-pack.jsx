import { Outlet } from 'react-router-dom';
import Header from '../../../shared/UI/header';
import Breadcrumb from '../../../shared/UI/breadcrumb';

const CustomPack = () => {
  const breadcrumbItems = [
    { title: 'Plan Data', url: 'plan-data', active: true },
    { title: 'Healthcare Services', url: 'healthcare-services', active: false },
    {
      title: 'Reimbursement Details',
      url: '/reimbursement-details',
      active: false,
    },
    { title: 'Plan Summary', url: '/plan-summary', active: false },
    {
      title: 'Customize plan by age',
      url: '/customize-plan-by-age',
      active: false,
    },
    {
      title: 'Coverage & Expense Details',
      url: '/coverage-expense-details',
      active: false,
    },
    { title: 'installments', url: '/installments', active: false },
    { title: 'Summary', url: '/summary', active: false },
  ];
  return (
    <div className="flex flex-col items-center gap-10 w-full h-full">
      <Header
        heading={'Custom Package'}
        desc={'Gold: 100K EGP, Silver: 50K EGP, White: 20K EGP'}
      />
      <Breadcrumb items={breadcrumbItems} />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default CustomPack;
