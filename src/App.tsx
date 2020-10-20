import React from 'react';

import Layout from 'components/Layout';

import 'styles/tailwind.output.css';

function App() {
  return (
    <Layout>
      <div className='App'>
        <input
          className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal m-10'
          type='email'
          placeholder='jane@example.com'
        />
      </div>
    </Layout>
  );
}

export default App;
