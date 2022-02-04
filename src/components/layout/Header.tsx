import React from 'react';

const Header: React.FC = (props) => {
  return (
    <header className="bg-gray-100 border-b-[1px] h-12 flex justify-center items-center">
      {props.children}
    </header>
  );
};

export default Header;
