import React from 'react';

import SearchForm from 'components/SearchForm';

import { LayoutProps } from 'react-app-env';

const Header: React.FC<LayoutProps> = React.memo(({ top }) => {
  console.log('Header: render()');

  return (
    <header className='bg-header flex items-center justify-center text-white font-bold h-16 fixed w-full z-10'>
      {top ? <span className='text-4xl'>Search Moives</span> : <SearchForm />}
    </header>
  );
});

export default Header;
