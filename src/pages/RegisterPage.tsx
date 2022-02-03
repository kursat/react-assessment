import React, { useState } from 'react';
import BigButton from '../components/BigButton';
import RegisterEmailForm from '../components/forms/RegisterEmailForm';
import RegisterPhoneForm from '../components/forms/RegisterPhoneForm';
import Header from '../components/layout/Header';
import TabButton from '../components/TabButton';
import TabButtons from '../components/TabButtons';

const RegisterPage: React.FC = () => {
  const [state, setState] = useState<'email' | 'phone'>('email');

  return (
    <main>
      <Header />
      <div className="container px-4">
        <TabButtons className="mt-6 text">
          <TabButton
            selected={state === 'email'}
            onClick={() => setState('email')}
          >
            Email
          </TabButton>
          <TabButton
            selected={state === 'phone'}
            onClick={() => setState('phone')}
          >
            Phone
          </TabButton>
        </TabButtons>
        {state === 'email' ? <RegisterEmailForm /> : <RegisterPhoneForm />}

        <div className="text-center mt-8 mx-8 text-xs text-gray-400">
          by clicking continue you must agree to near labs{' '}
          <a href={'/terms-and-conditions'} className="text-purple-500">
            Terms & Conditions
          </a>{' '}
          and{' '}
          <a href={'/privacy-policy'} className="text-purple-500">
            Privacy Policy
          </a>
        </div>

        <div className=" w-11/12 block my-8 m-auto border-b border-gray-200" />
        <div className="text-center text-gray-600">
          Already have NEAR account?
        </div>

        <BigButton className="bg-gray-600">
          <span className={'mr-6'}>Log in with NEAR</span>
          <img src={'/img/chevron-right.png'} className="h-4" alt={''} />
        </BigButton>
      </div>
    </main>
  );
};

export default RegisterPage;