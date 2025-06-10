import "./OrderStyle.css"
import { MdDelete  } from "react-icons/md";

function Order(props){
  return(<div className="orders-cont">
   <img src={props.elements.img} alt={"pictures"}/>
      <h6>{props.elements.model}
      </h6>
       <p className="Price">{props.elements.price} ლ</p>
     <MdDelete className="delete" onClick={()=>props.onDelete(props.elements.id)}/>
     </div>)
}

export default Order