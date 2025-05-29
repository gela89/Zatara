import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import {useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import About from './pages/About'
import Footer from './components/Footer'
import Kitchen from './pages/Kitchen/Kitchen'
import Tables from './pages/Tables/Tables'
import ItemPaje from './pages/ItemPaje/ItemPaje'
import Wardboards from './pages/Wardboards/Wardboards'
import {data} from './data'


function Root(){
const [objItem, setobjItem] =useState({})
const [order,setOrder]=useState([])


  return(
    //All Product category
  <div className="Appcontainer">,
 
    <Header orders={order} 
    onDelete={deleteOrder}/>
   <Routes>
    
      <Route path="/ItemPaje" element={<ItemPaje
    Base_Objects={data}
    OnAddProduct={addOrder}
  />}/>
    
<Route path="/" element={
    <>
    <Main addOrder={addOrder}/>
    </>}/>
     
  <Route path="/Kitchen" element={<Kitchen 
    dataObject={data.filter((item)=>
    item.category.includes('Kitchen')
    ) }
  />}/>
  
    <Route path="/Kitchen/:id" element={<ItemPaje Base_Objects={data}/>}/>
  

  <Route path="/Wardboards" element={<Wardboards
  Base_Objects={data.filter((item)=>
  item.category.includes('Wardboards')
  )}
  OnAddProduct={addOrder}
  />}/>

     <Route path="/Wardboards/:id" element={<ItemPaje
     Base_Objects={data}
     OnAddProduct={addOrder}
   />}/> 
  
 <Route path="/Tables"  element={<Tables    dataObject={data.filter((item)=>
   item.category.includes('Tables')
    ) }
    
 />}/>

  <Route path="/Tables/:id" element={<ItemPaje 
    Base_Objects={data}
  />}/>

          

   <Route path="/About" element={<About/>}/>
</Routes>
   
   
  

  </div>
    )

   
   
  function deleteOrder(id){
    setOrder(order.filter(el => el.id !==id));
    }
    
function addOrder(item){
 let isArry = false;
 order.forEach(el => {
   if(el.id ===item.id)
   isArry = true;
 })
 if(!isArry)
  setOrder(()=>{
    let newOrder =[...order,item];
    return newOrder;
  })}}
export default Root;