import React from 'react';
import Order from './Order';
import './OrderStyle.css';

function ShowOrder({ orders, onDelete }) {
  const totalPrice = orders.reduce((acc, el) => {
    const itemPrice = parseFloat(el.price.toString().replace(' ლ', ''));
    const itemQuantity = el.quantity || 1;
    return acc + (itemPrice * itemQuantity);
  }, 0);

  return (
    <>
      <div className="order-items-list">
        {orders.map((el) => (
          <Order key={el.id} elements={el} onDelete={onDelete} />
        ))}
      </div>
      <div className="total-amount">
        <span>ჯამი:</span>
        <span>{totalPrice.toFixed(2)} ლ</span>
      </div>
    </>
  );
}

function EmptyOrder() {
  return (
    <div className="empty-order-message">
      <h2>კალათა ცარიელია!</h2>
      <p>დაამატეთ პროდუქტები საყიდლების გასაგრძელებლად.</p>
    </div>
  );
}

function ShoppingPanel({ orders, onDelete, cardOpen, innerRef, onClose }) {
  return (
    <div className={`shop-order-wrapper ${cardOpen ? 'open' : ''}`} ref={innerRef}>
      <div className="shop-order-header">
        <h2>კალათა</h2>
        <button className="close-btn" type="button" onClick={onClose}>&times;</button>
      </div>

      {orders.length > 0 ? (
        <ShowOrder orders={orders} onDelete={onDelete} />
      ) : (
        <EmptyOrder />
      )}

      {orders.length > 0 && (
        <div className="shop-actions">
          <button className="checkout-btn">შეკვეთის გაფორმება</button>
          <button className="continue-shopping-btn">გაგრძელება</button>
        </div>
      )}
    </div>
  );
}

export default ShoppingPanel;