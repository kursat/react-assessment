import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import BigButton from '../BigButton';
import FormInput from '../FormInput';

interface PropTypes {
  className?: string | undefined;
}

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .trim()
    .matches(/\(\d{3}\) \d{3} \d{4}/, 'Not in correct format')
    .required('Phone number is required'),
});

const RegisterPhoneForm: React.FC<PropTypes> = (props) => {
  const formik = useFormik({
    validationSchema,
    isInitialValid: false,
    initialValues: { phone: '' },
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
        name={'phone'}
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={'Ex (337) 378 8383'}
        invalidText={touched.phone && errors.phone}
      />

      <BigButton type={'submit'} disabled={!isValid}>
        <span className={'mr-4'}>Continue</span>
        <img src={'/img/chevron-right.png'} className={'h-4'} alt={''} />
      </BigButton>
    </form>
  );
};

export default RegisterPhoneForm;
