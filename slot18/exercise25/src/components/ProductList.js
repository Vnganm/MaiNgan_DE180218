import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const ProductList = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert(`Đã thêm ${product.name} vào giỏ hàng!`);
  };

  return (
    <Container className="mb-5">
      <h2 className="mb-4 text-center">Danh sách sản phẩm</h2>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-primary">{product.name}</Card.Title>
                <Card.Text className="text-muted small">
                  <strong>ID:</strong> {product.id}
                </Card.Text>
                <Card.Text className="flex-grow-1">{product.description}</Card.Text>
                <Card.Text className="h4 text-success mb-3">${product.price}</Card.Text>
                <div className="mb-3">
                  {product.catalogs.map(catalog => (
                    <Badge key={catalog} bg="info" className="me-1">
                      {catalog}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="primary"
                  onClick={() => handleAddToCart(product)}
                  className="mt-auto"
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;