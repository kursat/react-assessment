import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import BigButton from '../BigButton';
import FormInput from '../FormInput';

interface PropTypes {
  className?: string | undefined;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Invalid email'),
});

const RegisterEmailForm: React.FC<PropTypes> = (props) => {
  const formik = useFormik({
    validationSchema,
    isInitialValid: false,
    initialValues: { email: '' },
    onSubmit: (values) => {
      console.log('values: ', values);
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
