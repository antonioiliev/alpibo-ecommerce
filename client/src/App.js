import React from 'react';
import Header from './components/header/header';
import Footer from './components/Footer';
import HomePage from './containers/homepage.container';

function App() {
  return (
    <div style={{ paddingTop: '50px' }}>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
