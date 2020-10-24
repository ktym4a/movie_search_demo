import React from 'react';

import Layout from 'components/Layout';
import Search from 'components/Search';

const Top: React.FC = () => {
  return (
    <Layout top={true}>
      <div className='App'>TOP</div>
      <Search />
    </Layout>
  );
};

export default Top;
