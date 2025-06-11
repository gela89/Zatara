import './ShowPajes.css'

function ShowPajes(props){ 
  return (
    <div className='itemsObjConteiner'>
<ul> 
<h2>{props.title}</h2>
<li>ზომა. {props.size}</li>
<li>ფასი. {props.price}</li>
thus show paje
</ul>

    </div>
    )
}

export default ShowPajes;