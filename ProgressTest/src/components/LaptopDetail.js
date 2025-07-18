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
      setLaptop(response.data || null);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
      error.response?.status === 404 ? navigate('/404') : setLaptop(null);
    }
  };

  const handleBack = () => navigate('/laptops');
  const handleLogout = () => { setUser(null); navigate('/'); };

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (!laptop) return (
    <Container className="mt-5 text-center">
      <h4>Laptop not found</h4>
      <Button variant="outline-primary" onClick={handleBack}>Back</Button>
    </Container>
  );

  return (
    <>
      <Navbar bg="light" expand="lg" className="border-bottom">
        <Container>
          <Navbar.Brand>Laptop Details</Navbar.Brand>
          <Nav className="ms-auto">

            <Button variant="outline-danger" onClick={handleLogout}>
              Logout ({user.username})
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Row>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={laptop.image}
                alt={laptop.model}
                style={{ height: '300px', objectFit: 'contain' }}
                onError={(e) => e.target.src = 'https://via.placeholder.com/300?text=No+Image'}
              />
            </Card>
          </Col>

          <Col md={6}>
            <Card className="border-0">
              <Card.Body>
                <h3>{laptop.brand} {laptop.model}</h3>
                <p className="text-muted">Year: {laptop.year}</p>
                <h5 className="text-primary mb-3">{laptop.price}</h5>
                
                <hr />

                <h5>Description</h5>
                <p>{laptop.description || 'No description available.'}</p>


                <Button variant="primary" onClick={handleBack} className="me-2">Back</Button>
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