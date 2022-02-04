import React from 'react';

interface PropTypes {
  className?: string;
}

const VerticalLine: React.FC<PropTypes> = ({ className }) => {
  return (
    <div
      className={`block my-8 m-auto border-b border-gray-200 ${className}`}
    />
  );
};

export default VerticalLine;
