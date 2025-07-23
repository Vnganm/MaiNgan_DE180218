import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../redux/productSlice';

const DeleteFoodList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.product.items);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <Container className="my-3">
      <h2>Danh sách món ăn</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Mô tả</th>
            <th>Giá gốc</th>
            <th>Giá hiện tại</th>
            <th>Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food, index) => (
            <tr key={food.id}>
              <td>{index + 1}</td>
              <td>{food.name}</td>
              <td>{food.description}</td>
              <td>{food.price} đ</td>
              <td>{food.currentPrice} đ</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(food.id)}>Xóa</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="secondary" onClick={() => navigate('/')}>Quay lại</Button>
    </Container>
  );
};

export default DeleteFoodList;