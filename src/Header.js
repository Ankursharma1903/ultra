import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'
import {useStateValue} from './StateProvider'


function Header() {

const [{basket},dispatch]=useStateValue();


  return (
    <div className='header'>
      <Link to="/">
      <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
      </Link>
      <div className="header_search">
         <input type="text" className="header_searchInput" /> 
         <SearchIcon className='header_searchIcon'/>
{/* logo */}
      </div>
<div className="header_nav">
  <Link to='/login'>
<div className="header_option">
    <span className="header_optionLineOne">Hello Guest</span>
    <span className="header_optionLineTwo">Sign In</span>
</div>
  </Link>
<div className="header_option">
<span className="header_optionLineOne">Returns</span>
    <span className="header_optionLineTwo">& Orders</span>
</div>
<div className="header_option">
<span className="header_optionLineOne">Your</span>
    <span className="header_optionLineTwo">Prime</span>
</div>
<Link to="checkout">
<div className="header_optionBasket">
  <ShoppingBasketIcon/>
  <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
  {/* we can write basket.length but putting ? is helpful because if value is wrong so it will easily terminate and not give error */}
  
</div>
</Link>

</div>

    </div>
  )
}

export default Header


