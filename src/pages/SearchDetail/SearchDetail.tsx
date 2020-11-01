import React from 'react';

import Layout from 'components/Layout';
import SearchMain from 'components/SearchMain';

const SearchDetail: React.FC = () => {
  console.log('SearchPage: render()');
  return (
    <Layout top={false}>
      <div className='items-top justify-center w-full px-4 flex pt-32 pb-32'>
        <SearchMain />
      </div>
    </Layout>
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
};

export default SearchDetail;
