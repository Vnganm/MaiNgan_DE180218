import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions';
import { Container, Card, Form, Button } from 'react-bootstrap';

const ProductForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    catalogs: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      ...formData,
      price: parseFloat(formData.price),
      catalogs: formData.catalogs.split(',').map(catalog => catalog.trim())
    };
    dispatch(addProduct(product));
    alert('Đã thêm sản phẩm mới!');
    setFormData({ name: '', price: '', description: '', catalogs: '' });
  };

  return (
    <Container>
      <Card className="shadow-sm">
        <Card.Body>
          <h2 className="mb-4">Thêm sản phẩm mới</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Tên sản phẩm</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Giá</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                min="0"
                step="0.01"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mô tả</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Danh mục (phân cách bằng dấu phẩy)</Form.Label>
              <Form.Control
                type="text"
                name="catalogs"
                value={formData.catalogs}
                onChange={handleChange}
                placeholder="catalog1, catalog2"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Thêm sản phẩm
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductForm;