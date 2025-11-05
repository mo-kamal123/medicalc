import { useState } from 'react';
import DragAndDrop from '../../../shared/UI/drag-drop';
import { FaRegUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addClientData } from '../store/client-slice';

const ClientForm = () => {
  const navigate = useNavigate();
  const [clientData, setClientData] = useState({ name: '', logo: '' });
  const dispatch = useDispatch();
  // Allowed file types
  const allowedTypes = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/gif',
    'image/svg+xml',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (clientData.name.length > 2 && clientData.logo) {
      dispatch(addClientData(clientData));
      navigate('/select-package/ready');
      console.log(clientData);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 w-1/2 bg-white rounded-xl p-5"
    >
      <div className="client-name-input flex flex-col gap-2 ">
        <label htmlFor="client-name" className="text-label">
          Client Name
        </label>

        <div className="relative w-full">
          <FaRegUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main text-2xl" />
          <input
            type="text"
            id="client-name"
            className="border border-borders w-full p-3 pl-12 rounded-xl placeholder-sec"
            placeholder="Client Name"
            onChange={(e) =>
              setClientData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="logo" className="text-label">
          Client Logo
        </label>
        <DragAndDrop changeLogo={setClientData} allowedTypes={allowedTypes} />
      </div>
      <button
        // to={'/select-package/ready'}
        className="flex items-center justify-center gap-2 w-full bg-main text-white p-3 rounded-xl"
      >
        Next
      </button>
    </form>
  );
};

export default ClientForm;
