import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/Footer';
import HomePage from './containers/homepage.container';
import ProductPage from './containers/product.container';
import routes from './constants/routes.json';

const App = () => {
  return (
    <div style={{ paddingTop: '50px' }}>
      <Header />
      <Route path={routes.HOME} exact component={HomePage} />
      <Route path={routes.PRODUCT} component={ProductPage} />
      <Footer />
    </div>
  );
}

export default App;
