import './ItemStyles.css';
import { Link } from 'react-router-dom';

function Items(props) {
  return (
    <div id="item-cont" className="itemsObjContainer">
      {/* აქ ვცვლით მარშრუტს რომ ემთხვეოდეს Route-ს */}
      <Link to={`/ItemPaje/${props.obj.id}`}>
        <img id='HomePajeFotos' src={props.obj.img} alt={"pictures"} />
      </Link>

      <h2>{props.obj.title}</h2>

      <p>ზომა. {props.obj.details.dimensions.general}</p>
      <p className="Price">ფასი. {props.obj.price} </p>
    </div>
  );
}

export default Items;