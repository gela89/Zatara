import React, { useState, useEffect } from 'react';
import './itemPaje.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Render-ზე ატვირთული ბექენდის URL
const BASE_URL = "https://zatara-backend.onrender.com";

function ItemPaje({ products, addOrder }) {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loadingItem, setLoadingItem] = useState(true);
  const [errorItem, setErrorItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      setLoadingItem(true);
      setErrorItem(null);
      try {
        // აქ შეცვლილია URL შენს Render ბექენდზე
        const response = await axios.get(`${BASE_URL}/api/products/${id}`);
        const fetchedItem = { ...response.data, id: response.data._id };
        setItem(fetchedItem);
      } catch (err) {
        setErrorItem('პროდუქტი ვერ მოიძებნა ან შეცდომა ჩატვირთვისას.');
        console.error("Single Item API Fetch Error:", err);
        setItem(null);
      } finally {
        setLoadingItem(false);
      }
    };

    if (products && products.length > 0) {
      const foundItem = products.find(p => p.id === id);
      if (foundItem) {
        setItem(foundItem);
        setLoadingItem(false);
      } else {
        fetchItem();
      }
    } else {
      fetchItem();
    }
  }, [id, products]);

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
      <img src={item.img} alt={item.title} className='item-image' />

      <div className="item-details">
        <h2 className='item-title'>{item.title}</h2>
        <ul className='item-details-list'>
          <li>მასალა: {item.details.material}</li>
          <li>ზომა: {item.details.dimensions.general}</li>
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