import { IoLocationSharp } from 'react-icons/io5';
import locationImg from '../assets/locationImg.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getLocation } from '../../auth/store/auth-slice';

const LocationCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        dispatch(getLocation({ latitude, longitude }));
        navigate('/');
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          alert(
            'Location access was denied. Please enable location permissions in your browser settings to continue.'
          );
        } else {
          alert('Unable to retrieve location: ' + error.message);
        }
      }
    );
  };

  return (
    <div className="bg-white flex flex-col gap-4 items-center text-center rounded-lg p-4 sm:p-5 w-full max-w-[500px] mb-5 mx-auto lg:mx-0">
      <img
        className="w-48 sm:w-64 lg:w-80 h-auto"
        src={locationImg}
        alt="location Img"
      />
      <h3 className="text-lg sm:text-xl lg:text-2xl text-dark font-semibold">
        Please allow location permissions to start using services
      </h3>
      <p className="text-sec text-xs sm:text-sm">
        To use the TPA Calculator, MediConsult Consulting needs access to your
        location
      </p>
      <button
        onClick={handleGetLocation}
        className="flex items-center justify-center gap-2 w-full bg-main text-white p-2.5 sm:p-3 rounded-xl text-sm sm:text-base"
      >
        <span className="text-xl sm:text-2xl">
          <IoLocationSharp />
        </span>
        Enable Location
      </button>
    </div>
  );
};

export default LocationCard;
