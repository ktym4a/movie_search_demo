import React, { Fragment } from 'react';
import Header from 'components/Header';
import Background from 'components/Background';

const Layout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Background />
      {children}
    </Fragment>
  );
};

export default Layout;
