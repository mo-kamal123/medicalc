import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import DragAndDrop from '../../../shared/UI/drag-drop';
import { FaRegUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const ClientForm = () => {
  const navigate = useNavigate();
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
    navigate('/select-package');
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
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="logo" className="text-label">
          Client Logo
        </label>
        <DragAndDrop allowedTypes={allowedTypes} />
      </div>
      <Link
        to={'/select-package/ready'}
        className="flex items-center justify-center gap-2 w-full bg-main text-white p-3 rounded-xl"
      >
        Next
      </Link>
    </form>
  );
};

export default ClientForm;
