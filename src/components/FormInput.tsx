import React, { ChangeEventHandler } from 'react';

interface PropTypes {
  className?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler;
  onBlur?: ChangeEventHandler;
  name?: string;
  value?: string;
  valid?: boolean;
  invalidText?: string | boolean;
  maxLength?: number;
}

const FormInput: React.FC<PropTypes> = (props) => {
  const { className, invalidText, ...otherProps } = props;

  const classes = [
    'outline-0',
    'focus:border-purple-500',
    // 'valid:border-purple-500',
    'my-2',
    'py-3',
    'rounded-xl',
    'border-2',
  ];

  if (!!invalidText) {
    classes.push('border-red');
  }

  return (
    <>
      <input
        className={`${classes.join(' ')} ${className}`}
        {...otherProps}
        autoComplete={'none'}
      />
      {invalidText && <p className={'text-red'}>{invalidText}</p>}
    </>
  );
};

export default FormInput;
