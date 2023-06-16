import React, { useContext, useEffect, useState } from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { StateContext } from './StateProvider'

const Subtotal = () => {
  const [{basket}, dispatch] = useContext(StateContext)
  const[total, setTotal] = useState(0)
  
  useEffect(() =>{
    setTotal(basket.map(elem => elem.price).reduce((acc, elem) =>acc + Number(elem), 0))
  },[basket])  

  return (
    <div className='subtotal'>

<CurrencyFormat renderText={(value) =>(
    <>
    <p>Subtotal (<strong>{basket.length}</strong> items) :  <strong>{value}</strong> </p>

    <small className='subtotal__gift'>
        <input type="checkbox" name="" id="" /> This Order Contains a Gift.
    </small>
    </>
  )}
decimalScale={2}
value={total}
displayType='text'
thousandSeparator= {'true'}
prefix={'$'}


 />

 <button>Proceed to Checkout</button>

        
    </div>
  )
}

export default Subtotal