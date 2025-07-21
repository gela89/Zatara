import ShowPajes from '../ShowPajes/ShowPajes'
import {Link} from 'react-router-dom'

// მიიღეთ 'products' როგორც prop 'Root.js'-დან (ადრე dataObject)
export default function Tables({ products, OnAddProduct }) { // 'dataObject' ჩაანაცვლეთ 'products'-ით
  return (
    <main>
      {/* შეამოწმეთ, არის თუ არა მონაცემები ჩატვირთული */}
      {products.length === 0 ? (
        <p>მაგიდის პროდუქტები არ მოიძებნა ან ჯერ არ ჩაიტვირთა.</p>
      ) : (
        products.map(item => ( // გამოიყენეთ მიღებული products (რომელიც უკვე გაფილტრულია Root.js-ში)
          <div key={item.id} id="item-cont">
            {/* Link-ში გამოიყენეთ ItemPaje-ის სწორი მარშრუტი */}
            <Link to={`/ItemPaje/${item.id}`}> {/* Link-ის გზა შეიცვალა ItemPaje-სკენ */}
              <img id="HomePajeFotos" src={item.img} alt="Tables-foto"/>
            </Link>
            
            <ShowPajes 
              item={item}
              title={item.title}
              // თქვენი MongoDB მონაცემების მიხედვით, dimensions არის ობიექტი general თვისებით
              size={item.details.dimensions.general} 
              price={item.price}
              addOrder={OnAddProduct}
            />
          </div>
        ))
      )}
    </main> 
  );
}
