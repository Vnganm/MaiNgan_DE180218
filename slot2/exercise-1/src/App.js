// src/App.js

import "./App.css";

function App() {
  // Định nghĩa style cho thẻ h1
  const h1Style = {
    color: "blue",
    textAlign: "center",
    marginTop: "40px",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div>
      <h1 style={h1Style}>Hello world!</h1>
      <p style={{ textAlign: "center", fontSize: "18px" }}>
        Đây là ứng dụng React đầu tiên của bạn!
      </p>
    </div>
  );
}

export default App;
