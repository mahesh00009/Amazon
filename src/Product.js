import React from 'react'
import "./Product.css"
import { useContext } from 'react'
import { StateContext } from './StateProvider'

function Product({id, title, price, rating, img}) {

  const [{basket}, dispatch] =  useContext(StateContext)


  const addToBasket = () =>{
    dispatch({
      type: "ADD_TO_BASKET",
      item : {
      id : id, 
      title : title, 
      price: price, 
      rating: rating, 
      img: img
      },
    })

  console.log(basket)

  }
  
  return (
    title && <div className='product'>

        <div className="product__info">
            <p>{title}</p>
            <p className='product__price'>
                <strong>$</strong> <strong>{price}</strong>
            </p>
            
            <div className="product__rating">
              {Array.from({length:rating}).map((elem,i) =>{
                return <div key={i} className="book__ratings">
                        <p>⭐</p>
                  </div>
              })}

            </div>

            <img src={img} alt="" />

                <button className='btn__addToCart' onClick={addToBasket}>Add To Cart</button>

        </div>
        
    </div>
  )
}

export default Product