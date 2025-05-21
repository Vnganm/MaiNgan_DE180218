import React from 'react';

const Exercise6 = ({ employees }) => {
  return (
    <div>
      <h2>Exercise 6: Nhân viên phòng IT</h2>
      <ul>
        {employees
          .filter(emp => emp.department === "IT")
          .map((emp, index) => (
            <li key={emp.id || index}>
              {emp.name} - {emp.department}
            </li>
          ))}
      </ul>
      <hr />
    </div>
  );
};

export default Exercise6;