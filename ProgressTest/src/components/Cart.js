import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Cart = ({ cart, handleRemoveFromCart, handleUpdateCartQuantity, handleClearCart, handleCheckout }) => {
  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', '')) || 0;
    return sum + price * item.cartQuantity;
  }, 0).toFixed(2);

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h3>Cart <span className="text-muted">({cart.reduce((sum, item) => sum + item.cartQuantity, 0)} items)</span></h3>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map(item => (
                <Card key={item.id} className="mb-2">
                  <Card.Body className="d-flex align-items-center justify-content-between">
                    <div>
                      <Card.Title>{item.brand} {item.model}</Card.Title>
                      <Card.Text>
                        <strong>Price:</strong> {item.price}<br />
                        <strong>Quantity:</strong>
                        <Form.Control
                          type="number"
                          value={item.cartQuantity}
                          onChange={(e) => handleUpdateCartQuantity(item.id, parseInt(e.target.value) || 1)}
                          style={{ width: '100px', display: 'inline-block', margin: '0 10px' }}
                          min="1"
                        />
                      </Card.Text>
                    </div>
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              ))}
              <div className="text-end mt-3">
                <Button variant="outline-danger" onClick={handleClearCart} className="me-2">
                  Clear Cart
                </Button>
                <h4>Total: ${total}</h4>
                <Button variant="primary" onClick={handleCheckout}>
                  Checkout
                </Button>
              </div>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
  handleUpdateCartQuantity: PropTypes.func.isRequired,
  handleClearCart: PropTypes.func.isRequired,
  handleCheckout: PropTypes.func.isRequired
};

export default Cart;