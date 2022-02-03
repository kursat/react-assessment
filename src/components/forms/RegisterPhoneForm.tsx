import React from 'react';
import BigButton from '../BigButton';

const RegisterPhoneForm = () => {
  return (
    <div>
      <input
        className={'my-2 px-6 py-3 rounded-xl border-2 container'}
        placeholder={'Ex (337) 378 8383'}
      />

      <BigButton disabled={true}>
        <span className={'mr-4'}>Continue</span>
        <img src={'/img/chevron-right.png'} className={'h-4'} alt={''} />
      </BigButton>
    </div>
  );
};

export default RegisterPhoneForm;
