import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FoodList = ({ foods }) => {
  // Hàm tính discount
  const calculateDiscount = (price, currentPrice) => {
    const priceNum = parseFloat(price) || 0;
    const currentPriceNum = parseFloat(currentPrice) || 0;
    if (priceNum > 0 && currentPriceNum > 0 && currentPriceNum <= priceNum) {
      return ((1 - currentPriceNum / priceNum) * 100).toFixed(2);
    }
    return '0.00';
  };

  
  return (
    <Container className="my-3">
      <div className="mb-4">
        <Link to="/add" className="btn btn-success me-2">
          Thêm món ăn
        </Link>
        <Link to="/delete" className="btn btn-danger">
          Xóa món ăn
        </Link>
      </div>

      <h2 className="text-primary">Danh sách món ăn</h2>

      <Row xs={1} md={2} lg={3} className="g-4 mt-2">
        {foods.map((food) => (
          <Col key={food.id} className="mb-4">
            <Card
              className="h-100 shadow-sm"
              style={{ backgroundColor: '#f8f9fa', borderColor: '#e9ecef' }}
            >
              <Card.Img
                variant="top"
                src={food.image || '/images/placeholder.jpg'}
                alt={food.name}
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <Card.Body className="bg-light">
                <Card.Title style={{ color: '#dc3545' }}>{food.name}</Card.Title>
                <Card.Text style={{ color: '#6c757d' }}>
                  {food.description}
                </Card.Text>
                <Card.Text>
                  <strong className="text-success">{food.currentPrice} đ</strong>
                  <br />
                  <small className="text-muted">
                    <s>Giá gốc: {food.price} đ</s>
                  </small>
                  {/* Thêm hiển thị discount */}
                  <div className="mt-1">
                    <span className="badge bg-danger">
                      Giảm {calculateDiscount(food.price, food.currentPrice)}%
                    </span>
                  </div>
                </Card.Text>
                <Link
                  to={`/food/${food.id}`}
                  className="btn btn-primary w-100"
                  style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}
                >
                  Xem chi tiết
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FoodList;