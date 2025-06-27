import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Container, Alert } from "react-bootstrap";

const AdvancedForm = ({ onSubmit, title }) => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        phone: "",
        gender: "",
        agree: false,
    });
    const [errors, setErrors] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        const age = parseInt(formData.age, 10);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10,15}$/;

        if (!formData.name) newErrors.name = "Tên không được để trống!";
        else if (formData.name.length < 3 || formData.name.length > 50)
            newErrors.name = "Tên phải từ 3-50 ký tự!";

        if (!formData.age) newErrors.age = "Tuổi không được để trống!";
        else if (isNaN(age) || age < 18 || age > 100)
            newErrors.age = "Tuổi phải từ 18-100!";

        if (!formData.email) newErrors.email = "Email không được để trống!";
        else if (!emailRegex.test(formData.email))
            newErrors.email = "Email không hợp lệ!";

        if (!formData.phone) newErrors.phone = "Số điện thoại không được để trống!";
        else if (!phoneRegex.test(formData.phone))
            newErrors.phone = "Số điện thoại phải từ 10-15 chữ số!";

        if (!formData.gender) newErrors.gender = "Vui lòng chọn giới tính!";

        if (!formData.agree) newErrors.agree = "Phải đồng ý với điều khoản!";

        setErrors(newErrors);
        setShowAlert(Object.keys(newErrors).length > 0);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(false);
        if (validateForm()) {
            onSubmit(formData);
            setSuccess(true);
            setFormData({
                name: "",
                age: "",
                email: "",
                phone: "",
                gender: "",
                agree: false,
            });
            setShowAlert(false);
        }
    };

    return (
        <Container>
            <h3>{title}</h3>
            {showAlert && (
                <Alert variant="danger">
                    <strong>Lỗi:</strong> Vui lòng kiểm tra lại thông tin.
                </Alert>
            )}
            {success && (
                <Alert variant="success">
                    <strong>Thành công:</strong> Đã gửi thông tin!
                </Alert>
            )}
            <Form onSubmit={handleSubmit}>
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

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        isInvalid={!!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.phone}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formGender">
                    <Form.Label>Giới tính</Form.Label>
                    <Form.Control
                        as="select"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        isInvalid={!!errors.gender}
                    >
                        <option value="">Chọn giới tính</option>
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                        <option value="other">Khác</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        {errors.gender}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formAgree">
                    <Form.Check
                        type="checkbox"
                        name="agree"
                        label="Đồng ý với điều khoản"
                        checked={formData.agree}
                        onChange={handleChange}
                        isInvalid={!!errors.agree}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.agree}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Gửi
                </Button>
            </Form>
        </Container>
    );
};

AdvancedForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

export default AdvancedForm;