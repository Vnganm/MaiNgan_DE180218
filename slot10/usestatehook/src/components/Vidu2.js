import React, { useState } from 'react';

function Vidu2() {
  const [name, setName] = useState('Adam');
  const [age, setAge] = useState(35);

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ddd' }}>
      <h2>User Form</h2>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            console.log(e.target.value);
          }}
          style={{ marginRight: '10px' }}
        />
        <span>My name is {name}</span>
      </div>
      <div>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value, 10))}
          style={{ marginRight: '10px' }}
        />
        <span>My age is {age}</span>
      </div>
    </div>
  );
}

export default Vidu2;