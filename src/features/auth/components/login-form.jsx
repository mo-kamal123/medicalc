import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { MdLockOutline } from 'react-icons/md';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import Spinner from '../../../shared/UI/spinner';

/**
 * Login Form Component
 *
 * Form component for user authentication.
 * Handles user input for mobile number and password.
 *
 * Features:
 * - Mobile number input with icon
 * - Password input with show/hide toggle
 * - Form validation and submission
 * - Loading state with spinner
 * - Disabled state during submission
 *
 * @param {Object} props - Component props
 * @param {Function} props.login - Function to handle login submission
 * @param {boolean} props.loading - Loading state indicating if login is in progress
 *
 * @returns {JSX.Element} Login form component
 */
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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 sm:gap-5 w-full"
    >
      {/* Phone Input */}
      <div className="phone-input flex flex-col gap-2">
        <label htmlFor="mobile" className="text-label text-sm sm:text-base">
          Mobile Number
        </label>

        <div className="relative w-full">
          <HiOutlineDevicePhoneMobile className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main text-xl sm:text-2xl" />
          <input
            type="text"
            id="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="border border-borders w-full p-2.5 sm:p-3 pl-9 sm:pl-10 rounded-xl placeholder-sec text-sm sm:text-base"
            placeholder="Enter your mobile number"
            disabled={loading}
          />
        </div>
      </div>

      {/* Password Input */}
      <div className="password-input flex flex-col gap-2">
        <label htmlFor="password" className="text-label text-sm sm:text-base">
          Password
        </label>
        <div className="relative w-full">
          <MdLockOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main text-xl sm:text-2xl" />
          <input
            type={showPass ? 'text' : 'password'}
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-borders w-full p-2.5 sm:p-3 pl-9 sm:pl-10 pr-10 sm:pr-12 rounded-xl placeholder-sec text-sm sm:text-base"
            placeholder="Enter your password"
            disabled={loading}
          />
          {showPass ? (
            <FaEye
              onClick={handleShowPass}
              className="absolute right-3 sm:right-5 top-1/2 transform -translate-y-1/2 text-main text-xl sm:text-2xl cursor-pointer"
            />
          ) : (
            <FaRegEyeSlash
              onClick={handleShowPass}
              className="absolute right-3 sm:right-5 top-1/2 transform -translate-y-1/2 text-main text-xl sm:text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full p-2.5 sm:p-3 rounded-lg text-white font-semibold transition flex items-center justify-center gap-2 text-sm sm:text-base
          ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-main hover:bg-main/90'
          }`}
      >
        {loading ? (
          <>
            {/* Loading Spinner */}
            <Spinner size="sm" color="text-white" />
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
