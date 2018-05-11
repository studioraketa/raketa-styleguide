import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default ({ slogan, children }) => (
  <div>
    <Header slogan={slogan} />

    {children}

    <Footer />
  </div>
);