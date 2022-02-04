import { useFormik } from 'formik';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { setVerified } from '../../redux/features/registrationSlice';
import { useAppDispatch } from '../../redux/hooks';
import BigButton from '../BigButton';
import CodeInput from '../CodeInput';

const validationSchema = Yup.object().shape({
  code: Yup.string().length(6).required('Code is required'),
});

const VerificationForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    validationSchema,
    isInitialValid: false,
    initialValues: { code: '' },
    onSubmit: (values, { setFieldError }) => {
      fetch('http://localhost:4000/verify-code', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((r) => {
          if (!r.ok) {
            throw new Error(`API returned ${r.status}`);
          } else {
            r.json().then((data) => {
              console.log('data: ', data);
              if (data.code === values.code) {
                dispatch(setVerified(true));
                navigate('/confirm-code');
              } else {
                setFieldError('code', 'Wrong code');
              }
            });
          }
        })
        .catch((e) => {
          console.log(e.message);
        });
    },
  });

  const { handleSubmit, isValid, errors, touched, setFieldValue } = formik;

  const onChangeCode = useCallback(
    (value) => {
      setFieldValue('code', value);
    },
    [setFieldValue]
  );

  return (
    <form onSubmit={handleSubmit} className="mt-6 mx-6">
      <p className="text-gray-450 text-center">Enter verification code</p>
      <CodeInput onChange={onChangeCode} />
      <p className={'text-red'}>{touched.code && errors.code}</p>

      <BigButton className={'mt-6'} type={'submit'} disabled={!isValid}>
        <span className={'mr-4'}>Continue</span>
        <img src={'/img/chevron-right.png'} className={'h-4'} alt={''} />
      </BigButton>
    </form>
  );
};

export default VerificationForm;
