import React from 'react';

interface PropTypes {
  icon: string;
  title: string;
  smallDescription: string;
  memberInfo: string;
}

const CardRow: React.FC<PropTypes> = ({ icon, smallDescription }) => {
  return (
    <div>
      <div className="w-1/4">
        <img alt={smallDescription} src={`/img/${icon}`} />
      </div>
    </div>
  );
};

export default CardRow;
