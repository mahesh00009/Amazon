import React, { useContext } from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { StateContext } from './StateProvider';


function Header() {

    const [{ basket }, dispatch] = useContext(StateContext)


    return (

        <div className='header'>

            <Link to="/" >
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" className='header__logo' />

            </Link>



            <div className="header__search">
                <input type="text" className='header__searchInput' />
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className="header__nav">
                <Link to = "/login">
                <div className='header__option'>

                    <span className='header__optionLineOne'>
                        Hello User
                    </span>

                    <span className='header__optionLineTwo'>
                        SignIn
                    </span>
                </div>

                </Link>

                <div className='header__option'>

                    <span className='header__optionLineOne'>
                        Returns
                    </span>

                    <span className='header__optionLineTwo'>
                        & Orders
                    </span>
                </div>

                <div className='header__option'>

                    <span className='header__optionLineOne'>
                        Your
                    </span>

                    <span className='header__optionLineTwo'>
                        Prime
                    </span>

                </div>

            </div>
            <div className='header__optionBasket'>

                <Link to="/checkout">
                    <span className='header__optionLineTwo header__basketCount'>   

                         <ShoppingBasketIcon className='' />
                         <h2 className='basket__count'>{basket?.length}</h2>
                        </span>

                </Link>


            </div>

        </div>
    )
}

export default Header