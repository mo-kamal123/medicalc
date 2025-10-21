import React from 'react';
import LoginForm from '../components/login-form';

const Login = () => {
  return (
    <div className="flex flex-col gap-5 w-[90%] m-auto">
      <h1 className='text-3xl text-text font-bold'>
        Your Trusted Partner for <span className='text-main'> Smarter Health and Insurance </span>
        Management
      </h1>
      <p className='text-sec'>
        Access your account to manage your TPA plans, track your benefits,
        and stay covered anytime. secure platform designed to make
        healthcare simple and stress-free
      </p>
      <LoginForm />
    </div>
  );
};

export default Login;
