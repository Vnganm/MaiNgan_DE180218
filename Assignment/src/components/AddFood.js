import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productSlice';

const AddFood = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    currentPrice: '',
    image: '', // URL ảnh
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.description || !formData.price || !formData.currentPrice || !formData.image) {
      setError('Vui lòng điền đầy đủ thông tin');
      return false;
    }
    if (isNaN(formData.price) || isNaN(formData.currentPrice) || formData.price <= 0 || formData.currentPrice <= 0) {
      setError('Giá phải là số dương hợp lệ');
      return false;
    }
    if (parseFloat(formData.currentPrice) > parseFloat(formData.price)) {
      setError('Giá hiện tại không được lớn hơn giá gốc');
      return false;
    }
    return true;
  };

  // Phần tính và hiển thị discount
const calculateDiscount = () => {
  const price = parseFloat(formData.price) || 0;
  const currentPrice = parseFloat(formData.currentPrice) || 0;
  if (price > 0 && currentPrice > 0 && currentPrice <= price) {
    return ((1 - currentPrice / price) * 100).toFixed(2);
  }
  return '0.00';
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setError('');
      await dispatch(addProduct({
        ...formData,
        id: Date.now().toString(), // tạo id giả lập
      }));
      navigate('/');
    }
  };

  return (
    <Container className="my-3">
      <h2>Thêm món ăn mới</h2>
      {error && <Alert variant="danger" className="mb-3">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tên món ăn</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
          <Form.Label>Giá gốc</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Giá hiện tại</Form.Label>
          <Form.Control
            type="number"
            name="currentPrice"
            value={formData.currentPrice}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>URL ảnh món ăn</Form.Label>
          <Form.Control
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
          {formData.image && (
            <div className="mt-3">
              <img
                src={formData.image}
                alt="Xem trước"
                style={{ maxWidth: '200px', maxHeight: '200px' }}
              />
            </div>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
  <Form.Label>Giảm giá</Form.Label>
  <Form.Control
    type="text"
    value={`${calculateDiscount()}%`}
    readOnly
    style={{ backgroundColor: '#f8f9fa' }}
  />
</Form.Group>
        <Button variant="success" type="submit" disabled={loading} className="me-2">
          {loading ? 'Đang thêm...' : 'Thêm món ăn'}
        </Button>
        <Button variant="secondary" onClick={() => navigate('/')}>
          Quay lại
        </Button>
      </Form>
    </Container>
  );
};

export default AddFood;
