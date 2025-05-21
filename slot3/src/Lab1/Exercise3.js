import React from 'react';

const Exercise3 = ({ employees }) => {
  return (
    <div>
      <h2>Exercise 3: Bảng nhân viên</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Phòng ban</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={emp.id || index}>
              <td>{emp.id || index + 1}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
    </div>
  );
};

export default Exercise3;