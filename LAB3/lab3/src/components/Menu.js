import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

const pizzas = [
  {
    name: 'Margherita Pizza',
    price: 21,
    oldPrice: 34,
    img: 'images/menu1.png',
    tag: 'SALE',
  },
  {
    name: 'Mushroom Pizza',
    price: 23,
    img: 'images/menu2.png',
  },
  {
    name: 'Hawaiian Pizza',
    price: 27,
    img: 'images/menu3.png',
    tag: 'NEW',
  },
  {
    name: 'Pesto Pizza',
    price: 16,
    oldPrice: 23,
    img: 'images/menu4.png',
    tag: 'SALE',
  },
];

const Menu = () => (
  <Container className="my-5">
    <h2 className="text-white mb-4">Our Menu</h2>
    <Row>
      {pizzas.map((pizza, idx) => (
        <Col md={3} className="mb-4" key={idx}>
          <Card className="h-100">
            {pizza.tag && (
              <Badge bg="warning" text="dark" className="position-absolute" style={{
                top: 0,
                left: 0,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0
              }}>
                {pizza.tag}
              </Badge>
            )}
            <Card.Img 
              variant="top" 
              src={pizza.img} 
              alt={pizza.name}
              style={{ height: '61%', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>{pizza.name}</Card.Title>
              <Card.Text>
                {pizza.oldPrice && (
                  <span className="text-decoration-line-through text-dark me-2">
                    ${pizza.oldPrice}
                  </span>
                )}
                <span
                  className={
                    pizza.price === 30
                      ? "text-dark"
                      : pizza.price === 27 && !pizza.oldPrice

                      ? "text-dark"
                      : pizza.price === 23 && !pizza.oldPrice

                      ? "text-dark"
                      : "text-warning fw-bold"
                  }
                >
                  ${pizza.price}.00
                </span>
              </Card.Text>
              <Button variant="dark" className="w-100">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Menu;