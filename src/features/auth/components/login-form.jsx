import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { MdLockOutline } from 'react-icons/md';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

const LoginForm = ({ login, loading }) => {
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    mobile: '',
    password: '',
  });

  // handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return; // prevent double submits
    login(formData);
  };

  const handleShowPass = () => setShowPass((prev) => !prev);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Phone Input */}
      <div className="phone-input flex flex-col gap-2">
        <label htmlFor="mobile" className="text-label">
          Mobile Number
        </label>

        <div className="relative w-full">
          <HiOutlineDevicePhoneMobile className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main text-2xl" />
          <input
            type="text"
            id="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="border border-borders w-full p-3 pl-10 rounded-xl placeholder-sec"
            placeholder="Enter your mobile number"
            disabled={loading}
          />
        </div>
      </div>

      {/* Password Input */}
      <div className="password-input flex flex-col gap-2">
        <label htmlFor="password" className="text-label">
          Password
        </label>
        <div className="relative w-full">
          <MdLockOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main text-2xl" />
          <input
            type={showPass ? 'text' : 'password'}
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-borders w-full p-3 pl-10 rounded-xl placeholder-sec"
            placeholder="Enter your password"
            disabled={loading}
          />
          {showPass ? (
            <FaEye
              onClick={handleShowPass}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-main text-2xl cursor-pointer"
            />
          ) : (
            <FaRegEyeSlash
              onClick={handleShowPass}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-main text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full p-3 rounded-lg text-white font-semibold transition flex items-center justify-center gap-2 
          ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-main hover:bg-main/90'
          }`}
      >
        {loading ? (
          <>
            {/* Spinner */}
            <svg
              className="w-5 h-5 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            <span>Logging in...</span>
          </>
        ) : (
          'Login'
        )}
      </button>
    </form>
  );
};

export default LoginForm;
