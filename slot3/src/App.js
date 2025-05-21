import React from 'react';
import Exercise1 from './Lab1/Exercise1';
import Exercise2 from './Lab1/Exercise2';
import Exercise3 from './Lab1/Exercise3';
import Exercise4 from './Lab1/Exercise4';
import Exercise5 from './Lab1/Exercise5';
import Exercise6 from './Lab1/Exercise6';
import Exercise7 from './Lab1/Exercise7';
import Exercise8 from './Lab1/Exercise8';
import Exercise9 from './Lab1/Exercise9';
import Exercise10 from './Lab1/Exercise10';
import './App.css';

const App = () => {
  const employee = { name: "John Doe", age: 30, department: "IT" };
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

  return (
    <div className="App">
      <h1>Lab1</h1>
      <hr />
      <Exercise1 employee={employee} />
      <Exercise2 employees={employees} />
      <Exercise3 employees={employees} />
      <Exercise4 employees={employees} />
      <Exercise5 employees={employees} />
      <Exercise6 employees={employees} />
      <Exercise7 employees={employees} />
      <Exercise8 employees={employees} />
      <Exercise9 employees={employees} />
      <Exercise10 employees={employees} />
    </div>
  );
};

export default App;