import React, { useState } from 'react';

const Exercise10 = ({ employees }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <h2>Exercise 10: Tìm kiếm nhân viên</h2>
      <input
        type="text"
        placeholder="Tìm kiếm theo tên"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {employees
          .filter(emp => emp.name.toLowerCase().includes(searchTerm.toLowerCase()))
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

export default Exercise10;