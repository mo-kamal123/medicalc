import { useState } from 'react';
import Dropdown from '../../../shared/UI/drop-down';
import Header from '../../../shared/UI/header';
import { NavLink, Outlet } from 'react-router-dom';

const PackagesLayout = () => {
  const [selected, setSelected] = useState(null);

  const options = ['Basic', 'Standard', 'Premium'];

  return (
    <div className="flex flex-col items-center gap-10 w-full h-full pb-10">
      <Header
        heading={'Package Selection'}
        desc={'Choose the insurance package that best fits your needs.'}
      />
      <div className="flex flex-col gap-5 w-[90%] m-auto text-center">
        <h2 className="text-3xl text-text font-bold">
          Find the right plan for your business.
        </h2>
        <p className="text-sec">
          Every subscription comes with our core features choose the one that
          matches your goals and unlock advanced functionality as you grow.
        </p>
        <div className="flex items-center justify-center gap-5">
          <NavLink
            to="custom"
            className={({ isActive }) =>
              `border border-main p-3 px-6 rounded-4xl transition-colors ${
                isActive ? 'bg-main text-white' : 'text-main'
              }`
            }
          >
            Custom Packages
          </NavLink>

          <NavLink
            to="ready"
            className={({ isActive }) =>
              `border border-main p-3 px-6 rounded-4xl transition-colors ${
                isActive ? 'bg-main text-white' : 'text-main'
              }`
            }
          >
            Ready Packages
          </NavLink>
        </div>
        <Dropdown
          data={options}
          defaultValue="Standard"
          onChange={(value) => setSelected(value)}
        />

        <Outlet />
      </div>
    </div>
  );
};

export default PackagesLayout;
