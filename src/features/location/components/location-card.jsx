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

        console.log(latitude, longitude);
        // Dispatch actual location to Redux
        dispatch(getLocation({ latitude, longitude }));

        // Navigate to home (or wherever you need)
        navigate('/');
      },
      (error) => {
        alert('Unable to retrieve location: ' + error.message);
      }
    );
  };

  return (
    <div className="bg-white flex flex-col gap-4 items-center text-center rounded-lg p-5 max-w-[500px] mb-5">
      <img className="w-80" src={locationImg} alt="location Img" />
      <h3 className="text-2xl text-dark font-semibold">
        Please allow location permissions to start using services
      </h3>
      <p className="text-sec text-sm">
        To use the TPA Calculator, MediConsult Consulting needs access to your
        location
      </p>
      <button
        onClick={handleGetLocation}
        className="flex items-center justify-center gap-2 w-full bg-main text-white p-3 rounded-xl"
      >
        <span className="text-2xl">
          <IoLocationSharp />
        </span>
        Enable Location
      </button>
    </div>
  );
};

export default LocationCard;
