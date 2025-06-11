
import ShowPajes from '../ShowPajes/ShowPajes'
import './Tables.css'
import {Link} from 'react-router-dom'
export default function Tables({dataObject,
  OnAddProduct
}){
  return(
    <main>
        
     {dataObject.map(item =>(
   <div key={item.id } className="TablesCont">
     <Link to={`/Tables/${item.id}`}>
       <img id="HomePajeFotos" src={item.img} alt="Tables-foto"/>
       
     </Link>
    <ShowPajes 
      item={item}
      title={item.title}
      size={item.size}
      price={item.price}
      addOrder={OnAddProduct}
     />
    </div>
          ))}
   </main> 
    
    )
}