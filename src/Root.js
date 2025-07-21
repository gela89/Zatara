import {useState, useEffect} from 'react'
import './RootStyles.css';
import Header from './components/Header'
import Main from './components/Main'
import About from './pages/About'
import Footer from './components/Footer'
import Kitchen from './pages/Kitchen/Kitchen'
import Tables from './pages/Tables/Tables'
import ItemPaje from './pages/ItemPaje/ItemPaje'
import {Routes,Route} from 'react-router-dom'
import Wardboards from './pages/Wardboards/Wardboards' // შევინარჩუნოთ სახელი Wardboards კომპონენტისთვის
import axios from 'axios';

function Root() {
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        // მონაცემების დამუშავება: დავამატოთ `id` ველი, რომელიც `_id`-ის ტოლი იქნება
        // ეს აადვილებს პროდუქტებზე წვდომას `id`-ით მთელ ფრონტენდში
        const processedProducts = response.data.map(p => ({
          ...p,
          id: p._id // MongoDB-ს _id-ს ვაქცევთ id-ად ფრონტენდისთვის
        }));
        setProducts(processedProducts);
      } catch (err) {
        setError('შეცდომა პროდუქტების ჩატვირთვისას: ' + err.message);
        console.error("API Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const deleteOrder = (id) => {
    setOrder(order.filter(el => el.id !== id));
  }

  const addOrder = (item) => {
    let isInArray = false;
    order.forEach(el => {
      if (el.id === item.id) // აქაც id-ს ვიყენებთ
        isInArray = true;
    });
    if (!isInArray)
      setOrder([...order, item]);
  }

  if (loading) {
    return <div>მონაცემები იტვირთება...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="Rootcontainer">
      <Header orders={order} onDelete={deleteOrder} />
      <Routes>
        <Route path="/" element={<Main products={products} />} />

        <Route path="/Kitchen" element={<Kitchen products={products.filter(p => p.category === 'Kitchen')} OnAddProduct={addOrder} />} />
        <Route path="/Tables" element={<Tables products={products.filter(p => p.category === 'Tables')} OnAddProduct={addOrder} />} />
        {/* აქ შევცვალეთ path, რათა დაემთხვეს MongoDB-ს კატეგორიას (Wardboards) */}
        <Route path="/Wardboards" element={<Wardboards products={products.filter(p => p.category === 'Wardboards')} OnAddProduct={addOrder} />} />

        <Route
          path="/ItemPaje/:id"
          element={<ItemPaje products={products} addOrder={addOrder} />}
        />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Root;
