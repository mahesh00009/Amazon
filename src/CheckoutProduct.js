import React, { useContext } from 'react'
import "./CheckoutProduct.css"
import { StateContext } from './StateProvider'

const CheckoutProduct = ({id, image, title, price, rating}) => {
  const [{basket}, dispatch] =  useContext(StateContext)


  const removeFromBasketHandler = () =>{

    dispatch({
      type: 'REMOVE_FROM_BASKET', 
      id: id
    })

  }
  return (
    <div className='checkOutProduct'>

        <img src={image} alt="hello"  className='checkOutProduct__image'/>

        <div className="checkOutProduct__info">
            <p className='checkOutProduct__title'>{title}</p>
            <p className='checkOutProduct__price'>
            <small>$</small>
            <strong>{price}</strong>
            </p>

            <div className="checkOutProduct__rating">
                {Array.from({length: rating}).map((_, i) =>{
                    return <p>⭐</p>
                })
                }
            </div>
            <button onClick={removeFromBasketHandler}>Remove From Basket</button>
           


        </div>

    </div>
  )
}

export default CheckoutProduct