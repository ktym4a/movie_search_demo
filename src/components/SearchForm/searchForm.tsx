import React, { useContext, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { useHistory } from 'react-router-dom';
import { Store } from 'store';

const SearchForm: React.FC = () => {
  const { setGlobalState } = useContext(Store);
  const [searchText, setSearchText] = useState<string>('');
  const history = useHistory();

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      console.log('SearchForm: call => handleSubmit()');
      setGlobalState({ paged: 1 });
      setGlobalState({ serach: searchText });
      e.preventDefault();
      history.push(`/search?query=${searchText}`);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchText]
  );

  const changeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center content-center'>
      <input
        type='text'
        placeholder='Search'
        onChange={changeSearchValue}
        value={searchText}
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
