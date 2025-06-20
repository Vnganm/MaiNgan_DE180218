import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from "./components/ItemList";
import QuestionBank from "./components/QuestionBank";

function App() {
  return (
    <div>
      <h2 className="text-center">Bài 4</h2>
      <ItemList />;
      <h2 className="text-center">Bài 5 & 6</h2>
      <QuestionBank />;
    </div>
  );
}

export default App;