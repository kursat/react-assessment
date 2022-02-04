import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { setAuth } from '../../redux/features/authSlice';
import { resetRegistrationForm } from '../../redux/features/registrationSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import BigButton from '../BigButton';
import FormInput from '../FormInput';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  accountId: Yup.string().required('Account ID is required'),
});

const NewAccountForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const registrationForm = useAppSelector((state) => state.registrationForm);

  const formik = useFormik({
    validationSchema,
    isInitialValid: false,
    initialValues: { fullName: '', accountId: '' },
    onSubmit: (values, { setFieldError }) => {
      console.log('values: ', values);

      fetch(`http://localhost:4000/users?accountId=${values.accountId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((existingUsers) => {
          console.log('existingUsers: ', existingUsers);
          if (existingUsers.length)
            setFieldError('accountId', 'Account ID already taken!');
          else {
            fetch('http://localhost:4000/users', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                ...registrationForm,
                ...values,
              }),
            })
              .then((r) => {
                if (!r.ok) {
                  throw new Error(`API returned ${r.status}`);
                } else {
                  dispatch(resetRegistrationForm());

                  r.json().then((data) => {
                    dispatch(setAuth(data));
                    navigate('/');
                  });
                }
              })
              .catch((e) => {
                console.log(e.message);
              });
          }
        });
    },
  });

  const {
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    isValid,
    errors,
    touched,
  } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-5">
        <label className={'text-sm'}>Full Name</label>
        <FormInput
          name={'fullName'}
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          className="text-black px-6 w-full rounded-xl"
          placeholder={'Ex. John doe'}
        />
      </div>
      <div className="mt-1">
        <label className={'text-sm flex content-center'}>
          <p className={'inline-block'}>Account ID</p>
          <img
            alt={'info'}
            title={'info'}
            className={'h-4 ml-2 inline'}
            src="/img/info.png"
          />
        </label>
        <div className={'flex'}>
          <FormInput
            name={'accountId'}
            value={values.accountId}
            onChange={handleChange}
            onBlur={handleBlur}
            className="text-black px-6 w-3/4 rounded-l-xl rounded-br-0"
            placeholder={'yourname'}
          />
          <p className="text-black w-1/4 py-3 px-4 my-2 border-y-2 border-r-2 rounded-r-xl">
            .near
          </p>
        </div>
        <p className={'text-red'}>{touched.accountId && errors.accountId}</p>
      </div>

      <BigButton className={'mt-3'} type={'submit'} disabled={!isValid}>
        <span className={'mr-4'}>Continue</span>
        <img src={'/img/chevron-right.png'} className={'h-4'} alt={''} />
      </BigButton>
    </form>
  );
};

export default NewAccountForm;
