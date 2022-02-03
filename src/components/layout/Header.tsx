import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 border-b-[1px] text-xl h-12 flex justify-center items-center">
      <img alt={'brand logo'} src={'/full-logo.svg'} />
    </header>
  );
};

export default Header;
