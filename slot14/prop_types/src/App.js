import './App.css';
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import UserProfile from "./components/UserProfile";
import UserProfile2 from "./components/UserProfile2";
import MyForm from "./components/MyForm";
import AdvancedForm from "./components/AdvancedForm";

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState("userProfile");

  const handleFormSubmit = (formData) => {
    console.log("Dữ liệu đã gửi:", formData);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "userProfile":
        return <UserProfile name="Nguyễn Văn A" age={25} />;
      case "userProfile2":
        return (
          <UserProfile2
            name="Nguyễn Văn A"
            age={25}
            onSubmit={handleFormSubmit}
          />
        );
      case "myForm":
        return (
          <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
        );
      case "advancedForm":
        return (
          <AdvancedForm
            title="Đăng Ký Người Dùng"
            onSubmit={handleFormSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Container className="App">
      <h1>Ứng Dụng React</h1>
      <Form.Group controlId="componentSelect">
        <Form.Label>Chọn Bài</Form.Label>
        <Form.Control
          as="select"
          value={selectedComponent}
          onChange={(e) => setSelectedComponent(e.target.value)}
        >
          <option value="userProfile">Bài 1: UserProfile</option>
          <option value="userProfile2">Bài 2: UserProfile2</option>
          <option value="myForm">Bài 3: MyForm</option>
          <option value="advancedForm">Bài 4: AdvancedForm</option>
        </Form.Control>
      </Form.Group>
      <div className="mt-4">{renderComponent()}</div>
    </Container>
  );
};

export default App;