import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Card, Row, Col, Badge, Alert } from 'react-bootstrap';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  if (cartItems.length === 0) {
    return (
      <Container>
        <Card className="shadow-sm">
          <Card.Body>
            <h2 className="mb-4">Giỏ hàng</h2>
            <Alert variant="info" className="text-center">
              Giỏ hàng của bạn đang trống
            </Alert>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  return (
    <Container>
      <Card className="shadow-sm">
        <Card.Body>
          <h2 className="mb-4">
            Giỏ hàng
            <Badge bg="primary" className="ms-2">
              {cartItems.length} sản phẩm
            </Badge>
          </h2>
          {cartItems.map(item => (
            <Card key={item.id} className="mb-3 border-0 border-bottom">
              <Card.Body>
                <Row className="align-items-center">
                  <Col md={8}>
                    <h5 className="text-primary">{item.name}</h5>
                    <p className="text-muted small mb-1">
                      <strong>ID:</strong> {item.id}
                    </p>
                    <p className="text-muted mb-2">{item.description}</p>
                    <p className="h5 text-success mb-2">${item.price}</p>
                    <div>
                      {item.catalogs.map(catalog => (
                        <Badge key={catalog} bg="secondary" className="me-1">
                          {catalog}
                        </Badge>
                      ))}
                    </div>
                  </Col>
                  <Col md={4}>
                    <p className="text-muted">Số lượng: {item.quantity}</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
          <Card className="mt-4 bg-light">
            <Card.Body>
              <Row className="align-items-center">
                <Col>
                  <h4 className="mb-0">Tổng cộng:</h4>
                </Col>
                <Col xs="auto">
                  <h3 className="mb-0 text-success">${calculateTotal()}</h3>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Cart;