import React, { useState } from 'react';

function Vidu3() {
  const [products] = useState([
    { id: 1, name: 'Sản phẩm A' },
    { id: 2, name: 'Sản phẩm B' },
    { id: 3, name: 'Sản phẩm C' },
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCheckboxChange = (event) => {
    const productId = parseInt(event.target.value, 10);
    if (event.target.checked) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    }
  };

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ddd' }}>
      <h2>Product Selection (Checkbox)</h2>
      {products.map(product => (
        <div key={product.id} style={{ marginBottom: '5px' }}>
          <input
            type="checkbox"
            id={product.id}
            value={product.id}
            checked={selectedProducts.includes(product.id)}
            onChange={handleCheckboxChange}
            style={{ marginRight: '10px' }}
          />
          <label htmlFor={product.id}>{product.name}</label>
        </div>
      ))}

      {selectedProducts.length > 0 && (
        <div style={{ marginTop: '15px' }}>
          <p>Bạn đã chọn các sản phẩm: {selectedProducts.map(id => 
            products.find(p => p.id === id).name).join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default Vidu3;