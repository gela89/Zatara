import './MainStyle.css'
import Items from './Items'
import {data} from '../data'


function Main(props){

  return(
    <main>
      {data.map(el=>(
      <Items obj={el} addOrder={props.addOrder}  />
      ))}
    </main>
    )
}

export default Main