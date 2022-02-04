import React from 'react';
import { useNavigate } from 'react-router-dom';
import BigButton from '../components/BigButton';
import NewAccountForm from '../components/forms/NewAccountForm';
import Header from '../components/layout/Header';
import VerticalLine from '../components/layout/VerticalLine';

const CreateAccountPage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Header>
        <div className="w-full flex justify-center">
          <p className="font-semibold">Create NEAR account</p>
          <button
            className="mr-2 h-6 w-6 absolute right-0"
            onClick={() => navigate('/register')}
          >
            <img alt="Go back" src="/img/dismiss.png" />
          </button>
        </div>
      </Header>
      <div className={'m-4 mt-6 text-gray-450'}>
        <p>
          Enter an Account ID to use with your NEAR account. Your Account ID
          will be used for all NEAR operations, including sending and receiving
          assets.
        </p>

        <NewAccountForm />

        <p className="mx-4 text-xs">
          By creating a NEAR account, you agree to the NEAR Wallet{' '}
          <a href={'/terms-and-conditions'} className="text-purple-500">
            Terms & Conditions
          </a>{' '}
          and{' '}
          <a href={'/privacy-policy'} className="text-purple-500">
            Privacy Policy
          </a>
          .
        </p>
      </div>
      <VerticalLine className={'w-full  mb-4 mt-2'} />

      <div className="text-center text-gray-600">
        Already have NEAR account?
      </div>

      <BigButton className="bg-gray-600 mt-2">
        <span className={'mr-6'}>Log in with NEAR</span>
        <img src={'/img/chevron-right.png'} className="h-4" alt={''} />
      </BigButton>
    </main>
  );
};

export default CreateAccountPage;
