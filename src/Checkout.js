import React, { useContext } from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import { StateContext } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

const Checkout = () => {
      const [{basket}, dispatch] =  useContext(StateContext)

  return (
    <div className='checkout'>
        <div className="checkout__left">

            <img className = "checkout__ad" src="https://static.semrush.com/blog/uploads/media/c2/52/c2521160ece538cfdbfb218788caf9ea/mDWwN6GNJt_lE7-pGth6IXsdxvqVmPeaGHw-F_dHXiKN8p3FGgIVicwvbdShvLirF5slOvKUkxpfMkaVdne2a6do6vHWdLZSfy1i-lGmfZL9-FyS162K6P-QGbZbk1vKp9YjNSil%3Ds0.webp" alt="ad" />

            <div>
                <h2 className='checkout__title'>
                    Your Shopping Basket
                </h2>

                    {basket.map(item =>{
                        return <CheckoutProduct id={item.id}
                        title={item.title}
                        price = {item.price}
                        rating = {item.rating}
                        image = {item.img}
                        
                        />
                    })}



                    {console.log(basket)}
            </div>

        </div>

        <div className="checkout__right">
            <Subtotal/>

                </div>
    </div>
  )
}

export default Checkout