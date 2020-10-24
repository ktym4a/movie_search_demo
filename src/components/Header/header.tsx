import React from 'react';

import Search from 'components/Search';

import { LayoutProps } from 'react-app-env';

const Header: React.FC<LayoutProps> = ({ top }) => {
  return (
    <header className='bg-header flex items-center justify-center text-white font-bold h-16 fixed w-full z-10'>
      {top ? <span className='text-4xl'>Search Moives</span> : <Search />}
    </header>
  );
};

export default Header;
