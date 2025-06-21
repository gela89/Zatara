import './ShowPajes.css'

function ShowPajes(props) { 
  return (
    <div className='itemsObjConteiner'>
      <ul> 
        <h2>{props.title}</h2>
        <p>ზომა: {props.size}</p>
        <p className="Price">ფასი: {props.price}</p>
      </ul>
    </div>
  );
}

export default ShowPajes;