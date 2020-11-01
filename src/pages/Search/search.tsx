import React, { useContext, useMemo } from 'react';

import Layout from 'components/Layout';
import Paginate from 'components/Paginate';
import SearchContent from 'components/SearchContent';

import { Store } from 'store';

const Search: React.FC = () => {
  const { globalState } = useContext(Store);

  return useMemo(() => {
    console.log('SearchPage: render()');
    return (
      <Layout top={false}>
        <div className='items-top justify-center w-full px-4 flex pt-32 pb-32'>
          <SearchContent />
        </div>
        <Paginate />
      </Layout>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalState.movieData, globalState.loading]);
};

export default Search;
