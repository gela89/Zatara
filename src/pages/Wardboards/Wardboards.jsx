

import ShowPajes from '../ShowPajes/ShowPajes'
import {Link} from 'react-router-dom'

export default function Wardboards({ products, OnAddProduct }){
  
  return (
    
    <main>
      {products.length === 0 ? ( 
        <p>კარადების პროდუქტები არ მოიძებნა.</p>
      ) : (
        products.map(item => ( 
          <div key={item.id} id="item-cont">
            <Link to={`/ItemPaje/${item.id}`}>
              <img id="HomePajeFotos" src={item.img} alt="kitchen-foto"/>
            </Link>
            
            <ShowPajes 
              item={item}
              title={item.title}
              size={item.details.dimensions.general} 
              price={item.price}
              addOrder={OnAddProduct}
              features={item.details.features}
            />
          </div>
        ))
      )}
    </main> 
  );
}
