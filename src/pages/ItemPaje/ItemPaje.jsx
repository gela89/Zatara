import React, { useState, useEffect } from 'react';
import './itemPaje.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'; 



function ItemPaje({ products, addOrder }) { // <-- მიიღეთ products და addOrder
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loadingItem, setLoadingItem] = useState(true);
  const [errorItem, setErrorItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      setLoadingItem(true);
      setErrorItem(null);
      try {
        // პირდაპირი API ზარი ერთი პროდუქტის მისაღებად
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        // MongoDB-ს _id-ს ვაქცევთ id-ად ფრონტენდისთვის, თუ არ არის უკვე
        const fetchedItem = { ...response.data, id: response.data._id };
        setItem(fetchedItem);
      } catch (err) {
        setErrorItem('პროდუქტი ვერ მოიძებნა ან შეცდომა ჩატვირთვისას.');
        console.error("Single Item API Fetch Error:", err);
        setItem(null); // დარწმუნდით, რომ item არის null შეცდომისას
      } finally {
        setLoadingItem(false);
      }
    };

    // თუ products მასივი უკვე ჩატვირთულია და შეიცავს ამ ელემენტს, გამოიყენეთ ის
    // ეს თავიდან აგვარიდებს ზედმეტ API ზარებს
    if (products && products.length > 0) {
      const foundItem = products.find(p => p.id === id); // id უკვე ObjectId-დან არის (სტრიქონი)
      if (foundItem) {
        setItem(foundItem);
        setLoadingItem(false);
      } else {
        // თუ products-ში ვერ მოიძებნა, მაინც ვცადოთ API-ით წამოღება (შეიძლება პირდაპირ URL-ით შემოვიდა მომხმარებელი)
        fetchItem();
      }
    } else {
      // თუ products მასივი ჯერ ცარიელია, აუცილებლად გავაკეთოთ API ზარი
      fetchItem();
    }
  }, [id, products]); // დამოკიდებულებები: id (URL-დან) და products (Root-დან)

  if (loadingItem) {
    return <div>პროდუქტის დეტალები იტვირთება...</div>;
  }

  if (errorItem) {
    return <div>{errorItem}</div>;
  }

  if (!item) {
    return <div>არჩეული პროდუქტი არ არსებობს ან ჩატვირთვა ვერ მოხერხდა.</div>;
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
          <li>{item.details.features}.</li>
        </ul>
        <p className='item-price'>ფასი {item.price} ლ</p>


        <button className="add-to-cart-button" onClick={() => addOrder(item)}>
           კალათაში დამატება
        </button>
      </div>
   
    </div>
  );
}

export default ItemPaje;
