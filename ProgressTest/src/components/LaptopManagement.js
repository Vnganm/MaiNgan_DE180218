import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Navbar, Nav, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useCart } from './CartContext';

// Header Component
const Header = ({ user, handleLogout, cart }) => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Laptop Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={handleLogout}>
              Logout ({user.username})
            </Nav.Link>
            <Nav.Link onClick={handleCartClick}>
              Cart ({cart.length})
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-dark text-white mt-4 py-3">
    <Container>
      <Row>
        <Col className="text-center">
          <p>© {new Date().getFullYear()} Laptop Management. All rights reserved.</p>
          <p>Contact us: support@laptopmanagement.com | Phone: (123) 456-7890</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

// Define functions before useEffect
const fetchLaptops = async (setLaptops, setFilteredLaptops) => {
  try {
    const response = await axios.get('http://localhost:3001/Laptops');
    console.log('API response for laptops:', response.data);
    if (response.data && Array.isArray(response.data)) {
      setLaptops(response.data);
      setFilteredLaptops(response.data);
    } else {
      console.error('Invalid laptops data format:', response.data);
      setLaptops([]);
      setFilteredLaptops([]);
    }
  } catch (error) {
    console.error('Error fetching laptops:', error.message, 'Response:', error.response ? error.response.data : 'No response');
    setLaptops([]);
    setFilteredLaptops([]);
  }
};

const fetchCart = async (setCart) => {
  try {
    const response = await axios.get('http://localhost:3001/cart');
    console.log('API response for cart:', response.data);
    if (response.data && Array.isArray(response.data)) {
      setCart(response.data);
    } else {
      console.error('Invalid cart data format:', response.data);
      setCart([]);
    }
  } catch (error) {
    console.error('Error fetching cart:', error.message, 'Response:', error.response ? error.response.data : 'No response');
    setCart([]);
  }
};

const LaptopManagement = ({ user, setUser }) => {
  const { cart, setCart } = useCart();
  const [laptops, setLaptops] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchLaptops(setLaptops, setFilteredLaptops);
    fetchCart(setCart);
  }, [fetchLaptops, fetchCart]); // Use the function references

  useEffect(() => {
    console.log('LaptopManagement rendered, laptops:', laptops, 'cart:', cart, 'searchTerm:', searchTerm);
    if (laptops.length > 0) {
      if (searchTerm.trim() === '') {
        setFilteredLaptops(laptops);
      } else {
        const filtered = laptops.filter(laptop =>
          laptop.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
          laptop.model.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredLaptops(filtered);
      }
    } else {
      console.log('No laptops data available for filtering');
    }
  }, [searchTerm, laptops, cart]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!laptops || laptops.length === 0) {
      console.log('No laptop data available for search');
      return;
    }
    if (searchTerm.trim() === '') {
      setFilteredLaptops(laptops);
    } else {
      const filtered = laptops.filter(laptop =>
        laptop.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        laptop.model.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLaptops(filtered);
    }
  };

  const handleViewDetails = (laptopId) => {
    navigate(`/laptops/${laptopId}`);
  };

  const handleAddToCart = async (laptop) => {
    if (laptop.quantity <= 0) {
      alert('This laptop is out of stock!');
      return;
    }

    try {
      const updatedLaptop = { ...laptop, quantity: laptop.quantity - 1 };
      await axios.put(`http://localhost:3001/Laptops/${laptop.id}`, updatedLaptop);

      const newCartItem = { id: laptop.id, ...laptop, cartQuantity: 1 };
      const response = await axios.post('http://localhost:3001/cart', newCartItem);
      const addedItem = response.data;

      setCart([...cart, addedItem]);
      const updatedLaptops = laptops.map(item =>
        item.id === laptop.id ? updatedLaptop : item
      );
      setLaptops(updatedLaptops);
      setFilteredLaptops(updatedLaptops);
    } catch (error) {
      console.error('Error adding to cart:', error.message, 'Response:', error.response ? error.response.data : 'No response');
      alert('Failed to add to cart. Data added locally, but not saved to server.');
      const newCartItem = { id: laptop.id, ...laptop, cartQuantity: 1 };
      setCart([...cart, newCartItem]);
      const updatedLaptops = laptops.map(item =>
        item.id === laptop.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setLaptops(updatedLaptops);
      setFilteredLaptops(updatedLaptops);
    }
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <>
      <Header user={user} handleLogout={handleLogout} cart={cart} />

      <Carousel className="mb-4" style={{ margin: 0, padding: 0 }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/anh1.jpg"
            alt="First slide"
            style={{ height: '400px', objectFit: 'cover', width: '100vw' }}
          />
          <Carousel.Caption className="text-dark">
            <h3>Featured Laptop 1</h3>
            <p>Explore our latest collection!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/anh2.jpg"
            alt="Second slide"
            style={{ height: '400px', objectFit: 'cover', width: '100vw' }}
          />
          <Carousel.Caption className="text-dark">
            <h3>Featured Laptop 2</h3>
            <p>Discover cutting-edge technology!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/anh3.jpg"
            alt="Third slide"
            style={{ height: '400px', objectFit: 'cover', width: '100vw' }}
          />
          <Carousel.Caption className="text-dark">
            <h3>Featured Laptop 3</h3>
            <p>Find the perfect laptop for you!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="mt-4">
        <Row className="mb-4">
          <Col md={6}>
            <h2>Laptop List</h2>
          </Col>
          <Col md={6}>
            <Form onSubmit={handleSearch}>
              <div className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="Search by brand or model..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch(e);
                    }
                  }}
                  className="me-2"
                />
                <Button variant="outline-primary" type="submit">
                  Search
                </Button>
              </div>
            </Form>
          </Col>
        </Row>

        <Row>
          {filteredLaptops.map(laptop => (
            <Col xs={12} md={6} lg={3} key={laptop.id} className="mb-4">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={laptop.image}
                  alt={`${laptop.brand} ${laptop.model}`}
                  style={{ height: '200px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                  }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
                  <Card.Text>
                    <strong>Year:</strong> {laptop.year}<br />
                    <strong>Price:</strong> {laptop.price}<br />
                    <strong>Quantity:</strong> {laptop.quantity}
                  </Card.Text>
                  <Button
                    variant="primary"
                    className="mt-auto mb-2"
                    onClick={() => handleViewDetails(laptop.id)}
                  >
                    View Details
                  </Button>
                  <Button
                    variant="success"
                    className="mt-2"
                    onClick={() => handleAddToCart(laptop)}
                    disabled={laptop.quantity === 0}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {filteredLaptops.length === 0 && (
          <Row>
            <Col>
              <div className="text-center py-4">
                <h4>No laptops found</h4>
                <p>Try adjusting your search terms.</p>
              </div>
            </Col>
          </Row>
        )}
      </Container>

      <Footer />
    </>
  );
};

LaptopManagement.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
  handleLogout: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired
};

export default LaptopManagement;