import React from 'react';

import Search from 'components/Search';

import { LayoutProps } from 'react-app-env';

const Header: React.FC<LayoutProps> = ({ top }) => {
  return (
    <header className='bg-black flex items-center justify-center text-white font-bold text-4xl h-16'>
      {top ? 'Search Moives' : <Search />}
    </header>
  );
};

export default Header;
