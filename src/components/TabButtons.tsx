import React, { ReactElement, ReactNode } from 'react';

interface PropTypes {
  children: ReactElement | ReactNode;
  className?: string;
}

const TabButtons: React.FC<PropTypes> = (props) => {
  const { children, className } = props;

  // TODO: buttons look like jumpy, fix it

  return (
    <div className={`flex justify-center text-neutral-600 ${className}`}>
      {children}
    </div>
  );
};

export default TabButtons;
