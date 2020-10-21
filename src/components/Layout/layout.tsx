import React, { Fragment } from 'react';
import Header from 'components/Header';

const layout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};

export default layout;
