import Breadcrumb from '../../../../shared/UI/breadcrumb';
import GeneralBenefited from '../components/general-benefited';
import InpatientBenfite from '../components/inpatient-benefite';
import Mediactions from '../components/mediactions';
import OutpatientBenefit from '../components/outpatient-benefit';

const Summary = () => {
  // Breadcrumbs — mark all steps before current as active
  const breadcrumbItems = [
    { title: 'Plan Data', url: '/standard-package/plan-data', active: true },
    {
      title: 'Healthcare Services',
      url: '/standard-package/healthcare-services',
      active: true,
    },
    {
      title: 'Reimbursement Details',
      url: '/standard-package/reimbursement-details',
      active: true,
    },
    {
      title: 'Plan Summary',
      url: '/standard-package/plan-by-age/summary',
      active: true,
    },
    {
      title: 'Customize plan by age',
      url: '/standard-package/plan-by-age/summary',
      active: true,
    },
    {
      title: 'Coverage & Expense Details',
      url: '/standard-package/coverage-details',
      active: true,
    },
    {
      title: 'Installments',
      url: '/standard-package/installments',
      active: true,
    },
    { title: 'Summary', url: '/standard-package/summary', active: true },
  ];
  return (
    <div className="flex flex-col gap-10">
      <Breadcrumb items={breadcrumbItems} />

      <GeneralBenefited />
      <InpatientBenfite />
      <OutpatientBenefit />
      <Mediactions />
      <button className="bg-main text-white text-xl font-semibold p-4 rounded mb-10">
        These prices are approximate and subject to change.
      </button>
    </div>
  );
};

export default Summary;
