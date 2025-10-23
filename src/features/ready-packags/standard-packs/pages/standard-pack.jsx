import { Outlet } from 'react-router-dom';
import Header from '../../../../shared/UI/header';

const StandardPack = () => {
  return (
    <div className="flex flex-col items-center gap-10 w-full h-full">
      <Header
        heading={'Standard Package'}
        desc={'Gold: 100K EGP, Silver: 50K EGP, White: 20K EGP'}
      />
      <div className="w-[90%]">
        <Outlet />
      </div>
    </div>
  );
};

export default StandardPack;
