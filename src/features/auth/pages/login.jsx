import React from 'react';
import LoginForm from '../components/login-form';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
  const { mutate: login, isPending } = useLogin(); // login mutation hook

  return (
    <div className="flex flex-col gap-4 sm:gap-5 w-full max-w-md lg:max-w-none m-auto">
      <h1 className="text-xl sm:text-2xl lg:text-3xl text-text font-bold text-center lg:text-left">
        Your Trusted Partner for{' '}
        <span className="text-main"> Smarter Health and Insurance </span>
        Management
      </h1>
      <p className="text-sm sm:text-base text-sec text-center lg:text-left">
        Access your account to manage your TPA plans, track your benefits, and
        stay covered anytime. secure platform designed to make healthcare simple
        and stress-free
      </p>
      <LoginForm login={login} loading={isPending} />
    </div>
  );
};

export default Login;
