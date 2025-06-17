import { MdDelete } from "react-icons/md";

function Order(props) {
  // დარწმუნდით, რომ price რიცხვია, და მოაშორეთ " ლ" თუ არსებობს
  const price = parseFloat(props.elements.price.toString().replace(' ლ', ''));
  const quantity = props.elements.quantity || 1; // ნაგულისხმევად 1

  return (
    <div className="orders-cont">
      <img src={props.elements.img} alt={"product"} />
      <div className="item-details">
        
        <h6>{props.elements.title}</h6>
        
        <div className="price-quantity">
          <span className="quantity">{quantity} x</span>
          <p className="Price">ფასი: {price.toFixed(2)} ლ</p>
        </div>
      </div>
      <MdDelete className="delete" onClick={() => props.onDelete(props.elements.id)} />
    </div>
  );
}

export default Order;