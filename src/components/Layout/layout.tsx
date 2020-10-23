import React from 'react';
import Header from 'components/Header';
import Background from 'components/Background';

const Layout: React.FC = ({ children }) => {
  return (
    <div className='grid grid-rows-layout min-h-screen'>
      <Header />
      <Background>{children}</Background>
    </div>
  );
};

export default Layout;
