import React from 'react';

import Search from 'components/Search';

const SearchHeader: React.FC = () => {
  return (
    <header className='bg-black flex items-center justify-center text-white h-16'>
      <Search />
    </header>
  );
};

export default SearchHeader;
