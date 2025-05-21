import React from 'react';

const Exercise1 = ({ employee }) => {
  const { name, age, department } = employee;

  return (
    <div>
      <h2>Exercise 1: Thông tin nhân viên</h2>
      <h1>{name}</h1>
      <p>Tuổi: {age}</p>
      <p>Phòng ban: {department}</p>
      <hr />
    </div>
  );
};

export default Exercise1;