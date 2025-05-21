import React from 'react';

const Exercise5 = ({ employees }) => {
  return (
    <div>
      <h2>Exercise 5: Dropdown tên nhân viên</h2>
      <select>
        {employees.map((emp, index) => (
          <option key={emp.id || index} value={emp.name}>
            {emp.name}
          </option>
        ))}
      </select>
      <hr />
    </div>
  );
};

export default Exercise5;