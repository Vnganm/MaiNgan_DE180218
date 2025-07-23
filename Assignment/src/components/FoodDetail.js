import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../redux/productSlice';

const FoodDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.product.items);
  const food = foods.find((f) => f.id === id);

  // Hàm tính discount
  const calculateDiscount = (price, currentPrice) => {
    const priceNum = parseFloat(price) || 0;
    const currentPriceNum = parseFloat(currentPrice) || 0;
    if (priceNum > 0 && currentPriceNum > 0 && currentPriceNum <= priceNum) {
      return ((1 - currentPriceNum / priceNum) * 100).toFixed(2);
    }
    return '0.00';
  };

  if (!food) return (
    <Container className="my-5 text-center">
      <h3 className="text-danger">Món ăn không tồn tại.</h3>
      <Button variant="primary" onClick={() => navigate('/')}>Quay lại danh sách</Button>
    </Container>
  );

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow">
            <Card.Img
              variant="top"
              src={food.image || '/images/placeholder.jpg'}
              alt={food.name}
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title className="text-center">
                {food.name}
              </Card.Title>
              <Card.Text className="text-muted">{food.description}</Card.Text>
              <Card.Text className="text-center">
                <strong className="text-primary fs-4">{food.currentPrice}đ</strong>
                <br />
                <small className="text-decoration-line-through text-secondary">
                  Giá gốc: {food.price}đ
                </small>
                {/* Thêm hiển thị discount */}
                <div className="mt-1">
                  <span className="badge bg-danger">
                    Giảm {calculateDiscount(food.price, food.currentPrice)}%
                  </span>
                </div>
              </Card.Text>
              <div className="d-flex justify-content-center gap-2 mt-4">
                <Button
                  variant="warning"
                  as={Link}
                  to={`/edit/${food.id}`}
                >
                  Sửa
                </Button>
                <Button
                  variant="danger"
                  onClick={async () => {
                    await dispatch(deleteProduct(food.id));
                    navigate('/');
                  }}
                >
                  Xóa
                </Button>
                <Button
                  variant="outline-secondary"
                  onClick={() => navigate('/')}
                >
                  Quay lại
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FoodDetail;