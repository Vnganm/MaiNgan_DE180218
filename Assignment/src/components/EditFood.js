import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../redux/productSlice';

const EditFood = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.product.items);
  const food = foods.find((f) => f.id === id);
  const [formData, setFormData] = useState(
    food || {
      name: '',
      description: '',
      price: '',
      currentPrice: '',
      image: '',
    }
  );
  const [imagePreview, setImagePreview] = useState(food?.image || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file && file.size < 2 * 1024 * 1024) { // Giới hạn 2MB
    const imageUrl = URL.createObjectURL(file);
    setFormData({ ...formData, image: imageUrl });
    setImagePreview(imageUrl);
  } else {
    setError('Ảnh quá lớn, chọn file dưới 2MB');
  }
};
  

  const validateForm = () => {
    if (!formData.name || !formData.description || !formData.price || !formData.currentPrice) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setError('');
      await dispatch(updateProduct({ ...formData, id }));
      navigate(`/food/${id}`);
    }
  };

  if (!food) return <Container>Món ăn không tồn tại.</Container>;

  return (
    <Container className="my-5">
      <h2>Chỉnh sửa món ăn</h2>
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
          <Form.Label>Chọn ảnh</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <div className="mt-3">
              <img
                src={imagePreview}
                alt="Preview"
                style={{ maxWidth: '200px', maxHeight: '200px' }}
              />
            </div>
          )}
        </Form.Group>
        <Button variant="success" type="submit" disabled={loading} className="me-2">
          {loading ? 'Đang cập nhật...' : 'Lưu thay đổi'}
        </Button>
        <Button variant="secondary" onClick={() => navigate(`/food/${id}`)}>
          Hủy
        </Button>
      </Form>
    </Container>
  );
};

export default EditFood;