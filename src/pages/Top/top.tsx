import React from 'react';

import Layout from 'components/Layout';
import SearchForm from 'components/SearchForm';

const Top: React.FC = () => {
  console.log('TopPage: render()');
  return (
    <Layout top={true}>
      <div className='items-top justify-center w-full px-4 flex pt-64'>
        <SearchForm />
      </div>
    </Layout>
  );
};

export default Top;
