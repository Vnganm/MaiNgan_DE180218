import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Vidu1() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ddd' }}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <button onClick={() => setCount(count - 1)}>
        Click me
      </button>
    </div>
  );
}

export default Vidu1;
