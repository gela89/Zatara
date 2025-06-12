import './AboutStyles.css'
import {useState} from 'react'
import {AcordeonItem} from './AcordeonItemComponent/AcordeonItem';
import {AcordeonData} from './AcordeonItemComponent/AcordeonData';

function About(){
  const [indexValue, setIndexValue] =useState(null);
  function Showcard(index){
    if(indexValue === index){
        setIndexValue(null)
      }else{
        setIndexValue(index)
      }
    }
  return(
  <div className="Title-content">
   <h2>ხშირად დასმული კითხვები</h2>
      {AcordeonData.map((item)=>(
  <AcordeonItem className="acor-items"
   setValue={indexValue}
   handClickFu={Showcard}
   content={item.content}
   title={item.title}
   indexNum={item.indexNum}
   />
      ))}
   
  </div>
    )
}

export default About