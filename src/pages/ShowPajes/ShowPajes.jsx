import './ShowPajes.css'

function ShowPajes(props){ 
  return (
    <div className='itemsObjConteiner'>
<ul> 
<h2>{props.title}</h2>
<li>ზომა. {props.size}</li>
<li>ფასი. {props.price}</li>

</ul>
    </div>
    )
}

export default ShowPajes;