import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

// Hàm xác thực email
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Hàm xác thực mật khẩu
const validatePassword = (password) => {
  return password.length >= 8;
};

function EmailPasswordForm() {
  // States cho email
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  // States cho password
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);

  // State tổng thể để kiểm soát nút Submit
  const [isFormValid, setIsFormValid] = useState(false);

  // useEffect để xác thực email khi thay đổi
  useEffect(() => {
    if (emailTouched) {
      const isValid = validateEmail(email);
      setIsEmailValid(isValid);
      
      if (!isValid && email.length > 0) {
        setEmailErrorMessage("Vui lòng nhập một địa chỉ email hợp lệ!");
      } else if (email.length === 0) {
        setEmailErrorMessage("Email không được để trống!");
      } else {
        setEmailErrorMessage("");
      }
    }
  }, [email, emailTouched]);

  // useEffect để xác thực password khi thay đổi
  useEffect(() => {
    if (passwordTouched) {
      const isValid = validatePassword(password);
      setIsPasswordValid(isValid);
      
      if (!isValid && password.length > 0) {
        setPasswordErrorMessage("Mật khẩu phải có ít nhất 8 ký tự!");
      } else if (password.length === 0) {
        setPasswordErrorMessage("Mật khẩu không được để trống!");
      } else {
        setPasswordErrorMessage("");
      }
    }
  }, [password, passwordTouched]);

  // useEffect để kiểm tra tính hợp lệ của toàn bộ form
  useEffect(() => {
    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);
    const formValid = emailValid && passwordValid && email.length > 0 && password.length > 0;
    setIsFormValid(formValid);
  }, [email, password]);

  // Xử lý khi người dùng blur khỏi trường email
  const handleEmailBlur = () => {
    setEmailTouched(true);
  };

  // Xử lý khi người dùng blur khỏi trường password
  const handlePasswordBlur = () => {
    setPasswordTouched(true);
  };

  // Xử lý submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert("Form hợp lệ! Email: " + email + ", Password: " + password);
    }
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Đăng nhập</h2>
          <Form onSubmit={handleSubmit}>
            {/* Trường Email */}
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Nhập email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleEmailBlur}
                isValid={emailTouched && isEmailValid && email.length > 0}
                isInvalid={emailTouched && (!isEmailValid || email.length === 0)}
              />
              <Form.Control.Feedback type="invalid">
                {emailErrorMessage}
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                Email hợp lệ!
              </Form.Control.Feedback>
            </Form.Group>

            {/* Trường Password */}
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nhập mật khẩu của bạn"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={handlePasswordBlur}
                isValid={passwordTouched && isPasswordValid && password.length > 0}
                isInvalid={passwordTouched && (!isPasswordValid || password.length === 0)}
              />
              <Form.Control.Feedback type="invalid">
                {passwordErrorMessage}
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                Mật khẩu hợp lệ!
              </Form.Control.Feedback>
            </Form.Group>

            {/* Nút Submit */}
            <div className="d-grid">
              <Button 
                variant="primary" 
                type="submit" 
                disabled={!isFormValid}
                size="lg"
              >
                {isFormValid ? "Đăng nhập" : "Vui lòng nhập đầy đủ thông tin"}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default EmailPasswordForm;