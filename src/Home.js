import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>

            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB4286684220_jpg" alt="" className='home__image'/>


        <div className="home__row">
            <Product id = "234567"title ="The Lean Startup" price = "100" rating = "4" img= "https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg"/>

            <Product id = "125676" title = "The Theory Of Everything Paperback – 25 September 2006" rating="4" price="179.99" img="https://m.media-amazon.com/images/I/51oHUvYzbsL._SX327_BO1,204,203,200_.jpg" />


            <Product id = "333451" img='https://m.media-amazon.com/images/I/51OhYHwji3S._SX460_BO1,204,203,200_.jpg' price='99.99' title="The Canterville Ghost" rating='3'/>
       
        </div>

        
        <div className="home__row">
        <Product id="448890" title = "Think Straight: Change your thoughts, Change your life [Paperback] Foroux, Darius" rating="3" price = "109" img="https://m.media-amazon.com/images/I/41JoC4r8JDL._SX322_BO1,204,203,200_.jpg"/>

        <Product id = "543671" title= "Journey to the Centre of the Earth" price='111' rating='4' img="https://m.media-amazon.com/images/I/51fgmlOJYyL._SX460_BO1,204,203,200_.jpg"/>
       
        </div>

        
        <div className="home__row">
            <Product id = "123456" title = "Oxford English Mini Dictionary 7Th Edition" price = "209" img="https://m.media-amazon.com/images/I/41XLag+2IuL._SX351_BO1,204,203,200_.jpg" rating='5'/>

        </div>


        </div>

    </div>
  )
}

export default Home