import React from 'react';
import { useNavigate } from 'react-router-dom';
import VerificationForm from '../components/forms/VerificationForm';
import Header from '../components/layout/Header';
import VerticalLine from '../components/layout/VerticalLine';
import { useAppSelector } from '../redux/hooks';

const ConfirmCodePage: React.FC = () => {
  const navigate = useNavigate();

  const { email, phone } = useAppSelector((state) => state.registrationForm);

  return (
    <main>
      <Header>
        <div className="w-full flex justify-center">
          <p className="font-semibold">Verification</p>
          <button
            className="mr-2 h-6 w-6 absolute right-0"
            onClick={() => navigate('/register')}
          >
            <img alt="Go back" src="/img/dismiss.png" />
          </button>
        </div>
      </Header>
      <div className="text-center mt-8 mx-4">
        <div className="text-gray-600">
          We've sent a 6-digit verification code to the{' '}
          {email && 'email address'} {phone && 'phone'}
        </div>
        <div className="text-purple-500 text-lg">{email || phone}</div>
      </div>
      <VerificationForm />

      <VerticalLine className={'w-11/12'} />

      <p className="text-center text-gray-600 mb-6">
        Didn't receive your code?
      </p>

      <p className="text-center text-blue-100 mb-6">
        Send to a different email address
      </p>
      <p className="text-center text-blue-100">Resend your code</p>
    </main>
  );
};

export default ConfirmCodePage;
