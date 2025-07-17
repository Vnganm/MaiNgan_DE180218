import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

const LaptopDetail = ({ user, setUser }) => {
  const [laptop, setLaptop] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchLaptopDetail();
  }, [id]);

  const fetchLaptopDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/Laptops/${id}`);
      if (response.data) {
        setLaptop(response.data);
      } else {
        navigate('/404');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching laptop detail:', error);
      setLoading(false);
      // Chỉ chuyển đến 404 nếu thực sự không tìm thấy (status 404)
      if (error.response && error.response.status === 404) {
        navigate('/404');
      } else {
        // Nếu lỗi khác (như server down), hiển thị thông báo lỗi
        setLaptop(null);
      }
    }
  };

  const handleBackToList = () => {
    navigate('/laptops');
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  if (loading) {
    return (
      <Container className="mt-5">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </Container>
    );
  }

  if (!laptop) {
    return (
      <Container className="mt-5">
        <div className="text-center">
          <h2>Laptop not found</h2>
          <Button variant="primary" onClick={handleBackToList}>
            Back to List
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Laptop Management</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={handleLogout}>
                Logout ({user.username})
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Row className="mb-3">
          <Col>
            <Button variant="secondary" onClick={handleBackToList}>
              ← Back to List
            </Button>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Card>
              <Card.Img
                variant="top"
                src={laptop.image}
                alt={`${laptop.brand} ${laptop.model}`}
                style={{ height: '400px', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
                }}
              />
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title className="display-6">
                  {laptop.brand} {laptop.model}
                </Card.Title>
                <Card.Text>
                  <div className="mb-3">
                    <strong>Brand:</strong> {laptop.brand}
                  </div>
                  <div className="mb-3">
                    <strong>Model:</strong> {laptop.model}
                  </div>
                  <div className="mb-3">
                    <strong>Year:</strong> {laptop.year}
                  </div>
                  <div className="mb-3">
                    <strong>Price:</strong> <span className="text-success fs-4">{laptop.price}</span>
                  </div>
                  <div className="mb-3">
                    <strong>Description:</strong><br />
                    {laptop.description || 'No description available'}
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

LaptopDetail.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired
};

export default LaptopDetail;