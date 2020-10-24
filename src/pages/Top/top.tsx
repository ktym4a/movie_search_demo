import React from 'react';

import Layout from 'components/Layout';
import Search from 'components/Search';

const Top: React.FC = () => {
  return (
    <Layout top={true}>
      <div className='items-top justify-center w-full px-4 flex pt-64'>
        <Search />
      </div>
    </Layout>
  );
};

export default Top;
