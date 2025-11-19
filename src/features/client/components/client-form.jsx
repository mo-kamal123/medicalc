import { useState } from 'react';
import DragAndDrop from '../../../shared/UI/drag-drop';
import { FaRegUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addClientData } from '../store/client-slice';

const ClientForm = () => {
  const navigate = useNavigate();
  const [clientData, setClientData] = useState({
    name: '',
    logo: '',
    calculationId: '',
  });
  const [errors, setErrors] = useState({
    name: '',
  });
  const dispatch = useDispatch();

  // Allowed file types
  const allowedTypes = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/gif',
    'image/svg+xml',
  ];

  const validateForm = () => {
    const newErrors = { name: '' };

    if (!clientData.name.trim()) {
      newErrors.name = 'Client name is required';
    } else if (clientData.name.length < 3) {
      newErrors.name = 'Client name must be at least 3 characters long';
    }

    setErrors(newErrors);
    return !newErrors.name; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      dispatch(addClientData(clientData));
      navigate('/select-package/ready');
      console.log(clientData);
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setClientData((prev) => ({ ...prev, name: value }));

    // Clear error when user starts typing
    if (errors.name && value.length >= 3) {
      setErrors((prev) => ({ ...prev, name: '' }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 sm:gap-5 w-full max-w-md lg:max-w-lg xl:w-1/2 bg-white rounded-xl p-4 sm:p-5"
    >
      <div className="client-name-input flex flex-col gap-2">
        <label
          htmlFor="client-name"
          className="text-label text-sm sm:text-base"
        >
          Client Name
        </label>

        <div className="relative w-full">
          <FaRegUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main text-xl sm:text-2xl" />
          <input
            type="text"
            id="client-name"
            className={`border w-full p-2.5 sm:p-3 pl-10 sm:pl-12 rounded-xl placeholder-sec text-sm sm:text-base ${
              errors.name ? 'border-red-500' : 'border-borders'
            }`}
            placeholder="Client Name"
            onChange={handleNameChange}
            value={clientData.name}
          />
        </div>
        {errors.name && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="logo" className="text-label text-sm sm:text-base">
          Client Logo
        </label>
        <DragAndDrop
          headeing="click here to browse or drop you file"
          desc="upload client logo"
          changeLogo={setClientData}
          allowedTypes={allowedTypes}
        />
      </div>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 w-full bg-main text-white p-2.5 sm:p-3 rounded-xl text-sm sm:text-base hover:bg-blue-700 transition-colors"
      >
        Next
      </button>
    </form>
  );
};

export default ClientForm;
