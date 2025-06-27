import React from "react";
import AdvancedForm from "./components/AdvancedForm";

const App = () => {
  const handleFormSubmit = (formData) => {
    console.log("Dữ liệu đã gửi:", formData);
  };

  return (
    <div className="App">
      <h1>Ứng Dụng React</h1>
      <AdvancedForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;