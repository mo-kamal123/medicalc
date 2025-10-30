import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const PlanByAge = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-5">
        <NavLink
          to="summary"
          className={({ isActive }) =>
            `border border-main p-3 px-6 rounded-4xl transition-colors ${
              isActive ? 'bg-main text-white' : 'text-main'
            }`
          }
        >
          Plan Summary by age
        </NavLink>

        <NavLink
          to="custom"
          className={({ isActive }) =>
            `border border-main p-3 px-6 rounded-4xl transition-colors ${
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
