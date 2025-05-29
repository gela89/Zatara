import { useParams } from 'react-router-dom'

function ItemPaje({ Base_Objects = [], OnAddProduct}) {
  const { id } = useParams();
  const item = Base_Objects.find(obj => obj.id === Number(id)); // ან parseInt(id)

  return (
    <div>
      <img src={item.img} alt="foto-content"/>
      <h1>{item.title}</h1>
      <p>{item.color}</p>
      That
    </div>
  );
}

export default ItemPaje;