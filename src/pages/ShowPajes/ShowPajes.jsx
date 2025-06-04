import './ShowPajes.css'

function ShowPajes(props){ 
  return (
    <div className='itemsObjConteiner'>
<ul> 
<h2>{props.title}</h2>
<li>ზომა. {props.size}</li>
<li>ფასი. {props.price}</li>
<button onClick={()=>props.addOrder(props.item)}>კალათაში დამატება</button>
</ul>
    </div>
    )
}

export default ShowPajes;