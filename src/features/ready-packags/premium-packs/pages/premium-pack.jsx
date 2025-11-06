import { Outlet } from 'react-router-dom';
import Header from '../../../../shared/UI/header';

const PremiumPack = () => {
  return (
    <div className="flex flex-col items-center gap-10 w-full h-full">
      <Header
        heading={'Premium Package'}
        desc={'plan 1 , plan 2 , plan 3 , plan 4'}
      />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default PremiumPack;
