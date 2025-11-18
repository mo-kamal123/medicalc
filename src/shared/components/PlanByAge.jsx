import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Breadcrumb from '../UI/breadcrumb';

const PlanByAge = ({type}) => {
  // Breadcrumbs — mark all steps before current as active
  const breadcrumbItems = [
    { title: 'Plan Data', url: `/${type}-package/plan-data`, active: true },
    {
      title: 'Healthcare Services',
      url: `/${type}-package/healthcare-services`,
      active: true,
    },
    {
      title: 'Reimbursement Details',
      url: `/${type}-package/reimbursement-details`,
      active: true,
    },
    {
      title: 'Plan Summary',
      url: `/${type}-package/plan-by-age/summary`,
      active: true,
    },
    {
      title: 'Customize plan by age',
      url: `/${type}-package/plan-by-age/custom`,
      active: true,
    },
    {
      title: 'Coverage & Expense Details',
      url: `/${type}-package/coverage-expense-details`,
      active: false,
    },
    {
      title: 'Installments',
      url: `/${type}-package/installments`,
      active: false,
    },
    { title: 'Summary', url: `/${type}-package/summary`, active: false},
  ];

  return (
    <div className="flex flex-col gap-10">
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex items-center justify-center gap-3">
        <NavLink
          to="summary"
          className={({ isActive }) =>
            `border border-main md:p-3 md:px-6 md:text-base text-xs py-2 px-2 rounded-4xl transition-colors ${
              isActive ? 'bg-main text-white' : 'text-main'
            }`
          }
        >
          Plan Summary by age
        </NavLink>

        <NavLink
          to="custom"
          className={({ isActive }) =>
            `border border-main md:p-3 md:px-6 md:text-base text-xs py-2 px-2  rounded-4xl transition-colors ${
              isActive ? 'bg-main text-white' : 'text-main'
            }`
          }
        >
          Customize Plan by age
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default PlanByAge;
