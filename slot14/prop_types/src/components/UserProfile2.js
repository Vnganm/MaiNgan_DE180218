import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Container } from "react-bootstrap";

// Component UserProfile
const UserProfile2 = ({ name, age, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: name,
        age: age,
    });
    const [errors, setErrors] = useState({});

    // Hàm xử lý thay đổi giá trị input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Kiểm tra lỗi dữ liệu trước khi submit
    const validateForm = () => {
        const newErrors = {};

        // Kiểm tra tuổi phải từ 18 đến 100
        const age = parseInt(formData.age, 10);
        if (!formData.name) {
            newErrors.name = "Tên là bắt buộc";
        }
        if (!formData.age) {
            newErrors.age = "Tuổi không được để trống!";
        } else if (isNaN(age)) {
            newErrors.age = "Tuổi phải là một số hợp lệ!";
        } else if (age < 18 || age > 100) {
            newErrors.age = "Tuổi phải nằm trong khoảng từ 18 đến 100!";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Hàm submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmit(formData);
        }
    };

    return (
        <Container>
            <h3>Thông Tin Người Dùng</h3>
            <Form onSubmit={handleSubmit}>
                {/* Trường tên */}
                <Form.Group controlId="formName">
                    <Form.Label>Tên</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Trường tuổi */}
                <Form.Group controlId="formAge">
                    <Form.Label>Tuổi</Form.Label>
                    <Form.Control
                        type="text"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        isInvalid={!!errors.age}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.age}
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Nút submit */}
                <Button variant="primary" type="submit">
                    Gửi
                </Button>
            </Form>
        </Container>
    );
};

// Xác định PropTypes cho UserProfile
UserProfile2.propTypes = {
    name: PropTypes.string.isRequired, // 'name' là chuỗi bắt buộc
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 'age' có thể là chuỗi hoặc số
    onSubmit: PropTypes.func.isRequired, // Hàm onSubmit để xử lý khi người dùng submit form
};

export default UserProfile2;
