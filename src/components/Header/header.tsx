import React from 'react';

import Search from 'components/Search';

const Header: React.FC = () => {
  return (
    <header className='bg-black p-2 flex items-center justify-center text-white font-bold text-4xl'>
      <Search />
    </header>
  );
};

export default Header;
