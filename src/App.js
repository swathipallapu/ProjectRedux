import React from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import { incNumber,decNumber } from './Service/Action/Action';



function App() {
  const myState = useSelector((state)=>state.changeTheNumber)
  const dispatch = useDispatch()
  return (
    <div className="Container">
      <h1>Increment/Decrement Counter</h1>
      <h4>Using React and Redux</h4>

      <div className='quantity'>
        <a className='quantity_minus' title='Decrement'  onClick={()=>dispatch(decNumber())}><span> ➖</span></a>
        <input name="quantity" type="text" className='quantity_input' value={myState}/> 
        <a className='quantity_plus' title="Increment" onClick={()=>dispatch(incNumber())}><span> ➕ </span></a>
      </div>
    
    </div>
  );
}

export default App;
