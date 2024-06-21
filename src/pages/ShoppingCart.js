import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

  const handleCheckout = () => {
    // Compute total cost and proceed to checkout
    const totalCost = cart.reduce((total, item) => total + item.price, 0);
    alert(`Total cost: $${totalCost}`);
    // Proceed with payment processing
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
