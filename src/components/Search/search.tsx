import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search: React.FC = () => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex items-center content-center w-1/3'
    >
      <input
        type='text'
        placeholder='検索'
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        className='text-gray-600 py-2 block w-full appearance-none border border-transparent rounded-lg focus:outline-none text-left h-10 text-base leading-5 mr-4
        '
      />
      <button type='submit'>
        <FontAwesomeIcon icon={faSearch} className='h-10' />
      </button>
    </form>
  );
};

export default Search;