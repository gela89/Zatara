import Order from './Order';
import './OrderStyle.css'; // ან შენი CSS სადაც გინდა

function ShowOrder({ orders, onDelete }) {
  return (
    <div className="ShowOrder">
      {orders.map((el, id) => (
        <Order key={id} elements={el} onDelete={onDelete} />
      ))}
    </div>
  );
}

function EmrtyOrder() {
  return (
    <div className="emprty">
      <h2>Shop Box Empty!</h2>
    </div>
  );
}

function ShoppingPanel({ orders, onDelete, cardOpen, innerRef }) {
  return (
    <div
      className={`shop-order-wrapper ${cardOpen ? 'open' : ''}`}
      ref={innerRef}
    >
      {orders.length > 0 ? (
        <ShowOrder orders={orders} onDelete={onDelete} />
      ) : (
        <EmrtyOrder />
      )}
    </div>
  );
}

export default ShoppingPanel;
