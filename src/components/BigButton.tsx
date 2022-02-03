import React, { ReactElement, ReactNode } from 'react';

interface PropTypes {
  children: ReactElement | ReactNode;
  className?: String;
  disabled?: Boolean;
}

const BigButton: React.FC<PropTypes> = (props: PropTypes) => {
  const { children, className, disabled, ...otherProps } = props;

  const classes = [
    'text-white',
    'text-lg',
    'my-4',
    'm-auto',
    'bg-gray-300',
    'flex',
    'items-center',
    'rounded-xl',
    'py-2',
    'px-4',
  ];

  if (disabled) classes.push('bg-gray-300');
  else classes.push('bg-purple-500');

  return (
    <button className={`${classes.join(' ')} ${className}`} {...otherProps}>
      {children}
    </button>
  );
};

BigButton.defaultProps = {
  disabled: false,
};

export default BigButton;