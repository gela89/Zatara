
import ShowPajes from '../ShowPajes/ShowPajes'
import {Link} from 'react-router-dom'

export default function Kitchen({dataObject,OnAddProduct}){
  return(
    <main>
        
     {dataObject.map(item =>(
   <div key={item.id } id="item-cont">
     <Link to={`/Kitchen/${item.id}`}>
       <img id="HomePajeFotos" src={item.img} alt="kitchen-foto"/>
     </Link>
    
    <ShowPajes 
      item={item}
      title={item.title}
      size={item.details.dimensions.general}
      price={item.price}
      addOrder={OnAddProduct}
     />
  </div>
          ))}
   </main> 
    
    )
}