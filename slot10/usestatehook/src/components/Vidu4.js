import React, { useState } from 'react';

function Vidu4() {
  const [products] = useState([
    { id: 1, name: 'Sản phẩm A' },
    { id: 2, name: 'Sản phẩm B' },
    { id: 3, name: 'Sản phẩm C' },
  ]);

  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleRadioChange = (event) => {
    const productId = parseInt(event.target.value, 10);
    setSelectedProductId(productId);
  };

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ddd' }}>
      <h2>Product Selection (Radio)</h2>
      {products.map(product => (
        <div key={product.id} style={{ marginBottom: '5px' }}>
          <input
            type="radio"
            id={`radio-${product.id}`}
            name="product"
            value={product.id}
            checked={selectedProductId === product.id}
            onChange={handleRadioChange}
            style={{ marginRight: '10px' }}
          />
          <label htmlFor={`radio-${product.id}`}>{product.name}</label>
        </div>
      ))}

      {selectedProductId && (
        <div style={{ marginTop: '15px' }}>
          <p>Bạn đã chọn sản phẩm: {products.find(p => p.id === selectedProductId).name}</p>
        </div>
      )}
    </div>
  );
}

export default Vidu4;