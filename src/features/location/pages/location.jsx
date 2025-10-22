import Header from '../../../shared/UI/header';
import LocationCard from '../components/location-card';

const Location = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <Header
        heading={'Enable Location to Continue'}
        desc={
          'To use the Insurance Calculator, Medi Consulting needs access to your location'
        }
      />
      <div className="flex items-center justify-between w-[90%] m-auto">
        <div className="flex flex-col gap-4 max-w-1/2">
          <h1 className="text-5xl text-dark font-semibold leading-15">
            Location <span className="text-main"> Permeation Required </span>{' '}
            Enable Location to Continue
          </h1>
          <p className="text-sec">
            To use the Insurance Calculator, Medi Consulting needs access to
            your location
          </p>
        </div>
        <div>
          <LocationCard />
        </div>
      </div>
    </div>
  );
};

export default Location;
