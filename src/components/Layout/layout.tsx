import React from 'react';
import Header from 'components/Header';
import Background from 'components/Background';

import { LayoutProps } from 'react-app-env';

const Layout: React.FC<LayoutProps> = ({ children, top }) => {
  console.log('Layout: render()');

  return (
    <div className='grid grid-rows-layout min-h-screen'>
      <Header top={top} />
      <Background>{children}</Background>
    </div>
  );
};

export default Layout;
