import React from 'react';

const Exercise2 = ({ employees }) => {
  return (
    <div>
      <h2>Exercise 2: Danh sách nhân viên</h2>
      <ul>
        {employees.map((emp, index) => (
          <li key={emp.id || index}>
            {emp.name} - {emp.department}
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Exercise2;