import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, updateCartQuantity, removeFromCart } from '../redux/actions';
import { Container, Row, Col, Card, Button, Badge, Form } from 'react-bootstrap';

const ProductList = () => {
  const products = useSelector(state => state.products);
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
  
  // State để lưu số lượng tạm thời cho mỗi sản phẩm
  const [quantities, setQuantities] = useState({});

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert(`Đã thêm ${product.name} vào giỏ hàng!`);
  };

  const handleUpdateQuantity = (product) => {
    const quantity = quantities[product.id] || 1;
    const cartItem = cartItems.find(item => item.id === product.id);

    if (cartItem) {
      // Nếu sản phẩm đã có trong giỏ, cập nhật số lượng
      dispatch(updateCartQuantity(product.id, quantity));
      alert(`Đã cập nhật số lượng sản phẩm ${product.name}!`);
    } else {
      // Nếu sản phẩm chưa có trong giỏ, thêm mới với số lượng được chỉ định
      dispatch(addToCart({ ...product, quantity }));
      alert(`Đã thêm ${product.name} với số lượng ${quantity} vào giỏ hàng!`);
    }
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    alert(`Đã xóa sản phẩm ${productId} khỏi giỏ hàng!`);
  };

  const handleQuantityChange = (productId, value) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: value
    }));
  };

  return (
    <Container className="mb-5">
      <h2 className="mb-4 text-center">Danh sách sản phẩm</h2>
      
      <Row>
        {products.map(product => {
          const cartItem = cartItems.find(item => item.id === product.id);
          const quantity = quantities[product.id] || (cartItem ? cartItem.quantity : 1);

          return (
            <Col key={product.id} md={6} lg={6} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-primary">{product.name}</Card.Title>
                  <Card.Text className="text-muted small">
                    <strong>ID:</strong> {product.id}
                  </Card.Text>
                  <Card.Text className="flex-grow-1">
                    {product.description}
                  </Card.Text>
                  <Card.Text className="h4 text-success mb-3">
                    ${product.price}
                  </Card.Text>
                  
                  <div className="mb-3">
                    <small className="text-muted">Danh mục: </small>
                    {product.catalogs.map(catalog => (
                      <Badge key={catalog} bg="info" className="me-1">
                        {catalog}
                      </Badge>
                    ))}
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <Form.Control
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                      style={{ width: '70px' }}
                      className="text-center me-2"
                    />
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => handleUpdateQuantity(product)}
                    >
                      Update to Cart
                    </Button>
                  </div>

                  <div className="d-flex justify-content-between">
                    <Button 
                      variant="primary" 
                      onClick={() => handleAddToCart(product)}
                      disabled={cartItem} // Vô hiệu hóa nếu sản phẩm đã có trong giỏ
                    >
                      Add to Cart
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleRemoveFromCart(product.id)}
                      disabled={!cartItem} // Vô hiệu hóa nếu sản phẩm chưa có trong giỏ
                    >
                      Delete to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductList;