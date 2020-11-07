import React from 'react';

import SearchForm from 'components/SearchForm';

import { LayoutProps } from 'react-app-env';
import { Link } from 'react-router-dom';

const Header: React.FC<LayoutProps> = React.memo(({ top }) => {
  console.log('Header: render()');

  return (
    <header className='bg-header flex items-center text-white font-bold h-16 fixed w-full z-10 justify-around px-4'>
      <Link to={'/'}>
        <span className='text-4xl'>Moive Search</span>
      </Link>
      {top || <SearchForm />}
    </header>
  );
});

export default Header;
