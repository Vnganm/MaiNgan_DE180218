import React from 'react';

const Exercise4 = ({ employees }) => {
  const averageAge = (...ages) => {
    const sum = ages.reduce((total, age) => total + age, 0);
    return ages.length ? sum / ages.length : 0;
  };

  const ages = employees.map(emp => emp.age);

  return (
    <div>
      <h2>Exercise 4: Tuổi trung bình</h2>
      <p>Tuổi trung bình: {averageAge(...ages).toFixed(2)}</p>
      <hr />
    </div>
  );
};

export default Exercise4;