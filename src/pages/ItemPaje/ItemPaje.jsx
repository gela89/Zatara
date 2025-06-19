import './itemPaje.css'
import { useParams } from 'react-router-dom'

// `OnAddProduct` მიღებულია props-ად
function ItemPaje({ Base_Objects = [], OnAddProduct }) {
  const { id } = useParams();
  const item = Base_Objects.find(obj => obj.id === Number(id));

  // თუ პროდუქტი ვერ მოიძებნა
  if (!item) {
    return <div className="item-page-container" style={{ textAlign: 'center', padding: '50px' }}>
             <h2>პროდუქტი ვერ მოიძებნა.</h2>
             <p>გთხოვთ, დაბრუნდეთ მთავარ გვერდზე.</p>
           </div>;
  }

  return (
    <div className='item-page-container'>
      <img src={item.img} alt={item.title} className='item-image'/>

      <div className="item-details">
        <h2 className='item-title'>{item.title}</h2>
        <ul className='item-details-list'>
          <li>მასალა: {item.details.material}</li>
          <li>
            ზომა: {item.details.dimensions.general}
          </li>
          <li>აღწერა: {item.description}</li>
        </ul>
        <p className='item-price'>ფასი {item.price} ლ</p>

        {/* ***** ეს არის ახალი ღილაკი ***** */}
        <button className="add-to-cart-button" onClick={() => OnAddProduct(item)}>
          დამატება კალათაში
        </button>
      </div>
   
    </div>
  );
}

export default ItemPaje;