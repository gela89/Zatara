import './ItemStyles.css';
import {Link} from 'react-router-dom'
function Items(props) {
  return (
    <div id="item-cont" className="itemsObjContainer">
      <Link to={`${props.obj.category}/${props.obj.id}`}>
      <img id='categori-fotos' src={props.obj.img}  alt={"pictures"} />
      </Link>

      <h2>{props.obj.title}</h2>
      
      <p>ზომა. {props.obj.size}</p>
      <p className="Price">ფასი. {props.obj.price} ლ</p>
      <div className="add-to-cart-button" onClick={()=>props.addOrder(props.obj)}>დამატება კალათაში</div>
      
    </div>
    
  );
}

export default Items;