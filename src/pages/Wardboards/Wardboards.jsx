
import ShowPajes from '../ShowPajes/ShowPajes'
import {Link} from 'react-router-dom'

export default function Wardboards({Base_Objects,OnAddProduct}){
  return(
   <main>
        
     {Base_Objects.map(item =>(
   <div key={item.id } id="item-cont">
     <Link to={`/Wardboards/${item.id}`}>
       <img id="HomePajeFotos" src={item.img} alt="Wardboards-foto"/>
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