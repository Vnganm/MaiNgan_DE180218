import React from 'react';

const Exercise9 = ({ employees }) => {
  return (
    <div>
      <h2>Exercise 9: Kiểm tra tuổi teen</h2>
      <p>
        Có nhân viên tuổi teen không? {employees.some(e => e.age >= 10 && e.age <= 20).toString()}
      </p>
      <hr />
    </div>
  );
};

export default Exercise9;