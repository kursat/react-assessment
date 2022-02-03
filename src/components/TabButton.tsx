import React, { MouseEventHandler, ReactElement, ReactNode } from 'react';

interface PropTypes {
  children: ReactElement | ReactNode;
  className?: String;
  selected?: Boolean;
  onClick?: MouseEventHandler;
}

const TabButton: React.FC<PropTypes> = (props) => {
  const { children, className, selected, ...otherProps } = props;
  const classes = [
    'text-sm',
    'border-gray-300',
    'px-4',
    'py-1',
    'rounded-xl',
    'first-of-type:mr-3',
  ];

  if (selected) {
    classes.push('text-gray-600', 'border-2');
  } else {
    classes.push('text-gray-500');
  }

  return (
    <button className={`${classes.join(' ')} ${className}`} {...otherProps}>
      {children}
    </button>
  );
};

export default TabButton;
