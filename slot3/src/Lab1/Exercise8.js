import React from 'react';

const Exercise8 = ({ employees }) => {
  return (
    <div>
      <h2>Exercise 8: Nhóm theo phòng ban</h2>
      {Object.entries(
        employees.reduce((groups, emp) => {
          const dept = emp.department;
          groups[dept] = groups[dept] || [];
          groups[dept].push(emp);
          return groups;
        }, {})
      ).map(([dept, emps], index) => (
        <div key={index}>
          <h3>{dept}</h3>
          <ul>
            {emps.map((emp, i) => (
              <li key={emp.id || i}>
                {emp.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <hr />
    </div>
  );
};

export default Exercise8;