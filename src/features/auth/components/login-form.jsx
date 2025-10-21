import { useDispatch } from 'react-redux';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { MdLockOutline } from 'react-icons/md';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { login } from '../store/auth-slice';

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login()); 
  };
  const handleShowPass = () => {
    setShowPass((prev) => !prev);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="phone-input flex flex-col gap-2 ">
        <label htmlFor="phone" className="text-label">
          mobile number
        </label>

        <div className="relative w-full">
          <HiOutlineDevicePhoneMobile className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main text-2xl" />
          <input
            type="text"
            id="phone"
            className="border border-borders w-full p-3 pl-10 rounded-xl placeholder-sec"
            placeholder="mobile number"
          />
        </div>
      </div>
      <div className="password-input flex flex-col gap-2">
        <label htmlFor="password" className="text-label">
          Password
        </label>
        <div className="relative w-full">
          <MdLockOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main text-2xl" />
          <input
            type={showPass ? 'text' : 'password'}
            id="password"
            className="border border-borders w-full p-3 pl-10 rounded-xl placeholder-sec"
            placeholder="Password"
          />
          {showPass ? (
            <FaEye
              onClick={handleShowPass}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-main text-2xl"
            />
          ) : (
            <FaRegEyeSlash
              onClick={handleShowPass}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-main text-2xl"
            />
          )}
        </div>
      </div>
      <button className="bg-main w-full p-3 rounded-lg text-white">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
