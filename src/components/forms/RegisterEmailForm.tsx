import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import {
  resetRegistrationForm,
  setEmail,
} from '../../redux/features/registrationSlice';
import { useAppDispatch } from '../../redux/hooks';
import BigButton from '../BigButton';
import FormInput from '../FormInput';

interface PropTypes {
  className?: string | undefined;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Invalid email'),
});

const RegisterEmailForm: React.FC<PropTypes> = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    validationSchema,
    isInitialValid: false,
    initialValues: { email: '' },
    onSubmit: (values) => {
      fetch('http://localhost:4000/request-email-verification-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then((r) => {
          if (!r.ok) {
            throw new Error(`API returned ${r.status}`);
          } else {
            dispatch(resetRegistrationForm());
            dispatch(setEmail(values));
            navigate('/confirm-code');
          }
        })
        .catch((e) => {
          console.log(e.message);
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
    <form onSubmit={handleSubmit} className={props.className}>
      <FormInput
        className={'px-6 w-full'}
        name={'email'}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={'johndoe@gmail.com'}
        invalidText={touched.email && errors.email}
      />

      <BigButton type={'submit'} disabled={!isValid}>
        <span className={'mr-4'}>Continue</span>
        <img src={'/img/chevron-right.png'} className={'h-4'} alt={''} />
      </BigButton>
    </form>
  );
};

export default RegisterEmailForm;
