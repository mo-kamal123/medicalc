import { Outlet } from 'react-router-dom';
import Header from '../../../shared/UI/header';
import Breadcrumb from '../../../shared/UI/breadcrumb';

const CustomPack = () => {
  return (
    <div className="flex flex-col items-center gap-10 w-full h-full">
      <Header
        heading={'Custom Package'}
        desc={'Gold: 100K EGP, Silver: 50K EGP, White: 20K EGP'}
      />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default CustomPack;
