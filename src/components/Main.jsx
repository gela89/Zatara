import './MainStyle.css';
import Items from './Items';

function Main({ products, OnAddProduct }) { 

  return(
    <main>
      {products && products.length > 0 ? (
        products.map(el => {
          // აქ შეგიძლიათ დალოგოთ obj.id
          console.log("ოდქტის ID:",  typeof el); // ან უბრალოდ console.log(el.id);
          return (
            <Items key={el.id} obj={el} OnAddProduct={OnAddProduct} /> 
          );
        })
      ) : (
        <p>პროდუქტები არ მოიძებნა ან იტვირთება...</p>
      )}
    </main>
  );
}

export default Main;
