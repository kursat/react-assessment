import React, { useState } from 'react';
import BigButton from '../components/BigButton';
import RegisterEmailForm from '../components/forms/RegisterEmailForm';
import RegisterPhoneForm from '../components/forms/RegisterPhoneForm';
import Header from '../components/layout/Header';
import VerticalLine from '../components/layout/VerticalLine';
import TabButton from '../components/TabButton';
import TabButtons from '../components/TabButtons';

const RegisterPage: React.FC = () => {
  const [state, setState] = useState<'email' | 'phone'>('email');

  return (
    <main>
      <Header>
        <img alt={'brand logo'} src={'/full-logo.svg'} />
      </Header>
      <div className="w-full px-4">
        <TabButtons className="mt-6 mb-5">
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
        <RegisterEmailForm className={state === 'email' ? '' : 'hidden'} />
        <RegisterPhoneForm className={state === 'phone' ? '' : 'hidden'} />

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

        <VerticalLine className={'w-11/12'} />

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
