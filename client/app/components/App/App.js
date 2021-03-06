import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App = ({ children }) => (
  <div className = " p-3">
    <Header />

    <main>
      {children}
    </main>

    <Footer />
  </div>
);

export default App;
