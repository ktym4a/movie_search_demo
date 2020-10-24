import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { useHistory } from 'react-router-dom';

const SearchForm: React.FC = () => {
  const [term, setTerm] = useState('');
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push(`/search?query=${term}`);
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center content-center'>
      <input
        type='text'
        placeholder='Search'
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        className='text-gray-600 py-2 px-1 block appearance-none border rounded-lg focus:outline-none text-left h-10 text-base leading-5 mr-4 w-form
        '
      />
      <button type='submit'>
        <FontAwesomeIcon icon={faSearch} className='h-10' />
      </button>
    </form>
  );
};

export default SearchForm;
