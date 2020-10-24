import React from 'react';
import SearchHeader from 'components/SearchHeader';
import Header from 'components/Header';
import Background from 'components/Background';

import { LayoutProps } from 'react-app-env';

const Layout: React.FC<LayoutProps> = ({ children, top }) => {
  return (
    <div className='grid grid-rows-layout min-h-screen'>
      {top ? <Header /> : <SearchHeader />}
      <Background>{children}</Background>
    </div>
  );
};

export default Layout;
