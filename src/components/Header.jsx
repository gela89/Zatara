import './HeaderStyles.css'
import { FaShoppingCart } from "react-icons/fa";
import {useState} from 'react'
import Order from './Order'
import {Link, useLocation} from 'react-router-dom'
import { IoHome } from "react-icons/io5";

function ShowOrder(props){
 
  return(
    <div className="ShowOrder">
      {props.orders.map((el,id)=>(
      <Order key={id} elements={el} onDelete={props.onDelete}/>
      ))}
    </div>
  )}

function EmrtyOrder(){
  return(
    <div className="emprty">
    <h2>Shop Box Empty !</h2>
    </div>
    )}
    
function Header(props){
  const Location = useLocation();
  const presentation = Location.pathname === "/";
  let [cardOpeen,setcardOpeen] =useState(false)
  return(
    <>

      <div className="head-Title">
     <Link to="/"><IoHome className="home-icon"/></Link>  
  <div className="navigation-cont">
    <h4>
      <Link className="navigation" to="/About">ჩვენს შესახებ
    </Link>
     </h4>
      <h4>
        <Link className="navigation" to="/Kitchen">სამზარეილო</Link>
      </h4>
      
       <h4>
        <Link className="navigation" to="/Tables">მაგიდები</Link>
       </h4>
              <h4>
        <Link className="navigation" to="/Wardboards">კარადები</Link>
       </h4>
  </div>
     
  
      
     <div className='shopCard-cont'>
        <FaShoppingCart onClick={()=> setcardOpeen(cardOpeen = !cardOpeen)} className={`shopCard ${cardOpeen && 'active'}`} />
        {cardOpeen && (
        <div>{props.orders.length > 0 ? ShowOrder(props) : EmrtyOrder()
        }
        </div>
        )}
      </div>
    </div>
    <header>
      <div className={presentation ? 'Home-page' : null}>
        
      </div>
  </header>
    </>
    )
}

export default Header