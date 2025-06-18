import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

function CompleteForm() {
  // States cho các trường input
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  
  // States cho validation
  const [isNameValid, setIsNameValid] = useState(true);
  const [isGenderValid, setIsGenderValid] = useState(true);
  const [isCountryValid, setIsCountryValid] = useState(true);
  const [isTermsValid, setIsTermsValid] = useState(true);
  
  // States cho touched (đã tương tác)
  const [nameTouched, setNameTouched] = useState(false);
  const [genderTouched, setGenderTouched] = useState(false);
  const [countryTouched, setCountryTouched] = useState(false);
  const [termsTouched, setTermsTouched] = useState(false);
  
  // State tổng thể cho form
  const [isFormValid, setIsFormValid] = useState(false);

  // Hàm xác thực tên
  const validateName = (name) => {
    return name.trim().length >= 2;
  };

  // Hàm xác thực giới tính
  const validateGender = (gender) => {
    return gender !== "";
  };

  // Hàm xác thực quốc gia
  const validateCountry = (country) => {
    return country !== "";
  };

  // Hàm xác thực điều khoản
  const validateTerms = (agreeTerms) => {
    return agreeTerms;
  };

  // useEffect để xác thực tên
  useEffect(() => {
    if (nameTouched) {
      const isValid = validateName(name);
      setIsNameValid(isValid);
    }
  }, [name, nameTouched]);

  // useEffect để xác thực giới tính
  useEffect(() => {
    if (genderTouched) {
      const isValid = validateGender(gender);
      setIsGenderValid(isValid);
    }
  }, [gender, genderTouched]);

  // useEffect để xác thực quốc gia
  useEffect(() => {
    if (countryTouched) {
      const isValid = validateCountry(country);
      setIsCountryValid(isValid);
    }
  }, [country, countryTouched]);

  // useEffect để xác thực điều khoản
  useEffect(() => {
    if (termsTouched) {
      const isValid = validateTerms(agreeTerms);
      setIsTermsValid(isValid);
    }
  }, [agreeTerms, termsTouched]);

  // useEffect để kiểm tra tính hợp lệ của toàn bộ form
  useEffect(() => {
    const nameValid = validateName(name);
    const genderValid = validateGender(gender);
    const countryValid = validateCountry(country);
    const termsValid = validateTerms(agreeTerms);
    
    const formValid = nameValid && genderValid && countryValid && termsValid;
    setIsFormValid(formValid);
  }, [name, gender, country, agreeTerms]);

  // Xử lý các sự kiện blur
  const handleNameBlur = () => setNameTouched(true);
  const handleGenderChange = (value) => {
    setGender(value);
    setGenderTouched(true);
  };
  const handleCountryChange = (value) => {
    setCountry(value);
    setCountryTouched(true);
  };
  const handleTermsChange = (checked) => {
    setAgreeTerms(checked);
    setTermsTouched(true);
  };

  // Xử lý submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Đánh dấu tất cả các trường là đã touched
    setNameTouched(true);
    setGenderTouched(true);
    setCountryTouched(true);
    setTermsTouched(true);
    
    if (isFormValid) {
      alert(`Form đã được gửi thành công!\nTên: ${name}\nGiới tính: ${gender}\nQuốc gia: ${country}\nĐồng ý điều khoản: ${agreeTerms ? 'Có' : 'Không'}`);
    }
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card>
            <Card.Header>
              <h2 className="text-center mb-0">Form Đăng ký</h2>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                {/* Trường Tên */}
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Họ và tên *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập họ và tên của bạn"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={handleNameBlur}
                    isValid={nameTouched && isNameValid}
                    isInvalid={nameTouched && !isNameValid}
                  />
                  <Form.Control.Feedback type="invalid">
                    Tên phải có ít nhất 2 ký tự!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="valid">
                    Tên hợp lệ!
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Radio Button - Giới tính */}
                <Form.Group className="mb-3">
                  <Form.Label>Giới tính *</Form.Label>
                  <div className={`mt-2 ${genderTouched && !isGenderValid ? 'is-invalid' : ''}`}>
                    <Form.Check
                      type="radio"
                      id="male"
                      name="gender"
                      label="Nam"
                      value="Nam"
                      checked={gender === "Nam"}
                      onChange={(e) => handleGenderChange(e.target.value)}
                      className="mb-2"
                    />
                    <Form.Check
                      type="radio"
                      id="female"
                      name="gender"
                      label="Nữ"
                      value="Nữ"
                      checked={gender === "Nữ"}
                      onChange={(e) => handleGenderChange(e.target.value)}
                      className="mb-2"
                    />
                    <Form.Check
                      type="radio"
                      id="other"
                      name="gender"
                      label="Khác"
                      value="Khác"
                      checked={gender === "Khác"}
                      onChange={(e) => handleGenderChange(e.target.value)}
                    />
                  </div>
                  {genderTouched && !isGenderValid && (
                    <div className="invalid-feedback d-block">
                      Vui lòng chọn giới tính!
                    </div>
                  )}
                  {genderTouched && isGenderValid && gender && (
                    <div className="valid-feedback d-block">
                      Đã chọn giới tính!
                    </div>
                  )}
                </Form.Group>

                {/* Dropdown - Quốc gia */}
                <Form.Group className="mb-3" controlId="country">
                  <Form.Label>Quốc gia *</Form.Label>
                  <Form.Select
                    value={country}
                    onChange={(e) => handleCountryChange(e.target.value)}
                    isValid={countryTouched && isCountryValid}
                    isInvalid={countryTouched && !isCountryValid}
                  >
                    <option value="">Chọn quốc gia</option>
                    <option value="Vietnam">Việt Nam</option>
                    <option value="USA">Hoa Kỳ</option>
                    <option value="Japan">Nhật Bản</option>
                    <option value="Korea">Hàn Quốc</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Vui lòng chọn quốc gia!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="valid">
                    Đã chọn quốc gia!
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Checkbox - Điều khoản */}
                <Form.Group className="mb-4" controlId="terms">
                  <Form.Check
                    type="checkbox"
                    id="agreeTerms"
                    label="Tôi đồng ý với các điều khoản và điều kiện *"
                    checked={agreeTerms}
                    onChange={(e) => handleTermsChange(e.target.checked)}
                    isValid={termsTouched && isTermsValid}
                    isInvalid={termsTouched && !isTermsValid}
                  />
                  {termsTouched && !isTermsValid && (
                    <div className="invalid-feedback d-block">
                      Bạn phải đồng ý với các điều khoản để tiếp tục!
                    </div>
                  )}
                  {termsTouched && isTermsValid && (
                    <div className="valid-feedback d-block">
                      Cảm ơn bạn đã đồng ý!
                    </div>
                  )}
                </Form.Group>

                {/* Nút Submit */}
                <div className="d-grid">
                  <Button 
                    variant={isFormValid ? "success" : "secondary"} 
                    type="submit" 
                    disabled={!isFormValid}
                    size="lg"
                  >
                    {isFormValid ? "Gửi đăng ký" : "Vui lòng điền đầy đủ thông tin"}
                  </Button>
                </div>

                {/* Thông tin trạng thái form */}
                <div className="mt-3 text-center">
                  <small className="text-muted">
                    Trạng thái form: {isFormValid ? 
                      <span className="text-success font-weight-bold">✓ Hợp lệ</span> : 
                      <span className="text-danger">✗ Chưa hợp lệ</span>
                    }
                  </small>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CompleteForm;