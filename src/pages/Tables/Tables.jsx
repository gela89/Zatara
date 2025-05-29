import react from 'react'
import ShowPajes from '../ShowPajes/ShowPajes'
import './Tables.css'
import {Link} from 'react-router-dom'
export default function Tables({dataObject}){
  return(
    <main>
        
     {dataObject.map(item =>(
   <div key={item.id } className="TablesCont">
     <Link to={`/Tables/${item.id}`}>
       <img src={item.img} alt="Tables-foto"/>
       
     </Link>
    <ShowPajes 
      title={item.title}
      size={item.size}
      price={item.price}
     />
    </div>
          ))}
   </main> 
    
    )
}