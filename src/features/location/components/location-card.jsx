import { IoLocationSharp } from 'react-icons/io5';
import locationImg from '../assets/locationImg.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getLocation } from '../../auth/store/auth-slice';
import { useState } from 'react';

const LocationCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [blocked, setBlocked] = useState(false);

  // Reset trick (works only if user clicked "Deny", NOT "Never allow")
  function resetGeolocationPermission(callback) {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = 'https://example.com';

    iframe.onload = () => {
      try {
        iframe.contentWindow.navigator.geolocation.getCurrentPosition(
          () => {
            callback();
            document.body.removeChild(iframe);
          },
          () => {
            callback();
            document.body.removeChild(iframe);
          }
        );
      } catch (e) {
        callback();
        document.body.removeChild(iframe);
      }
    };

    document.body.appendChild(iframe);
  }

  const handleGetLocation = async () => {
    // STEP 1: Check browser permission status
    const permission = await navigator.permissions.query({
      name: 'geolocation',
    });

    if (permission.state === 'denied') {
      // User selected "Never allow"
      setBlocked(true);
      return;
    }

    // STEP 2: Attempt to reset if allowed
    resetGeolocationPermission(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(getLocation({ latitude, longitude }));
          navigate('/');
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            alert(
              'Location is required. Please click "Allow" in the popup to continue.'
            );
          } else {
            alert('Unable to retrieve location: ' + error.message);
          }
        }
      );
    });
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

      {blocked ? (
        <p className="text-red-500 text-sm">
          Location is blocked in your browser. Please enable it manually from
          browser settings.
        </p>
      ) : (
        <p className="text-sec text-xs sm:text-sm">
          To use the TPA Calculator, MediConsult Consulting needs access to your
          location
        </p>
      )}

      {blocked && (
        <button
          onClick={() =>
            window.open('chrome://settings/content/location', '_blank')
          }
          className="w-full bg-red-500 text-white p-2.5 rounded-xl"
        >
          Open Location Settings
        </button>
      )}

      {!blocked && (
        <button
          onClick={handleGetLocation}
          className="flex items-center justify-center gap-2 w-full bg-main text-white p-2.5 sm:p-3 rounded-xl text-sm sm:text-base"
        >
          <span className="text-xl sm:text-2xl">
            <IoLocationSharp />
          </span>
          Enable Location
        </button>
      )}
    </div>
  );
};

export default LocationCard;
