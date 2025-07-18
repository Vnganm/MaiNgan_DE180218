import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useCart } from './CartContext';

const Checkout = ({ user, setUser }) => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const handleConfirmCheckout = async () => {
    try {
      for (const item of cart) {
        const response = await axios.get(`http://localhost:3001/Laptops/${item.id}`);
        const laptop = response.data;
        const updatedLaptop = { ...laptop, quantity: laptop.quantity + item.cartQuantity };
        await axios.put(`http://localhost:3001/Laptops/${item.id}`, updatedLaptop);
      }
      await axios.delete('http://localhost:3001/cart');
      setCart([]);
      alert('Checkout successful! Thank you for your purchase.');
      navigate('/laptops');
    } catch (error) {
      console.error('Error during checkout:', error.response ? error.response.data : error.message);
      alert('Failed to complete checkout. Please try again.');
    }
  };

  const handleBack = () => navigate('/laptops');

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', '')) || 0;
    return sum + price * item.cartQuantity;
  }, 0).toFixed(2);

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <Container className="mt-4">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Button variant="primary" onClick={handleBack}>Back to Shopping</Button></p>
      ) : (
        <>
          <Row>
            {cart.map(item => (
              <Col md={12} key={item.id} className="mb-3">
                <Card>
                  <Card.Body className="d-flex justify-content-between">
                    <div>
                      <Card.Title>{item.brand} {item.model}</Card.Title>
                      <Card.Text>
                        Price: {item.price} x {item.cartQuantity}
                      </Card.Text>
                    </div>
                    <Card.Text>
                      Subtotal: ${(parseFloat(item.price.replace('$', '')) * item.cartQuantity).toFixed(2)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="mt-4">
            <Col className="text-end">
              <h4>Total: ${total}</h4>
              <Button variant="primary" onClick={handleConfirmCheckout} className="me-2">
                Confirm Purchase
              </Button>
              <Button variant="secondary" onClick={handleBack}>
                Back to Shopping
              </Button>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="text-end">
              <Button variant="outline-danger" onClick={handleLogout}>
                Logout ({user.username})
              </Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

Checkout.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired
};

export default Checkout;