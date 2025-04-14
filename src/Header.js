import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {
  const [{basket}] = useStateValue();

  return (
    <nav className="header">
        <Link to="/">
            <img className="header__logo"src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        </Link>
        <div className='header__search'>
          <input className='header__searchInput' type='text'/>
          <SearchIcon className="header__searchIcon"/>
        </div>

        {/* 3 links on side of the search icon */}
        <div className='header__nav'>
          <Link to="/login" className='header__link'>
            <div className='header__option'>
              <span className="header__optionLineOne"> hello balls</span>
              <span className="header__optionLineTwo"> Sign In</span>
            </div>
          </Link>
        </div>

        <div className='header__nav'>
          <Link to="/" className='header__link'>
            <div className='header__option'>
              <span className="header__optionLineOne"> Return</span>
              <span className="header__optionLineTwo"> & orders</span>
            </div>
          </Link>
        </div>

        <div className='header__nav'>
          <Link to="/" className='header__link'>
            <div className='header__option'>
              <span className="header__optionLineOne"> Your</span>
              <span className="header__optionLineTwo"> Prime</span>
            </div>
          </Link>
        </div>

        <Link to="/checkout"className='header__link' >
          <div className='header__optionBasket'>
            <ShoppingBasketIcon/>
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>




    </nav>
    
  )
}

export default Header