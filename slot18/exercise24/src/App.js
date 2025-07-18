import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="bg-light min-vh-100">
        <Navbar bg="primary" variant="dark" className="mb-4">
          <Container>
            <Navbar.Brand className="mx-auto">
              <i className="fas fa-shopping-cart me-2"></i>
              Shopping Cart với Redux
            </Navbar.Brand>
          </Container>
        </Navbar>
        
        <Container>
          <ProductList />
          <Cart />
        </Container>
      </div>
    </Provider>
  );
};

export default App;