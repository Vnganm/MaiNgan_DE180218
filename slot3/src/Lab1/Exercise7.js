import React from 'react';

const Exercise7 = ({ employees }) => {
  return (
    <div>
      <h2>Exercise 7: Sắp xếp nhân viên</h2>
      <ul>
        {[...employees]
          .sort((a, b) => 
            a.department.localeCompare(b.department) || a.name.localeCompare(b.name)
          )
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

export default Exercise7;