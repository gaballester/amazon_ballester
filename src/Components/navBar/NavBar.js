import "./navBar.css";
import SearchIcon from '@mui/icons-material/Search';

import { Link } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";
import Nav from "../Nav/Nav";

const NavBar = () => {
    return (
        <div className="navbar">
          <Link to="/" exact >
            <img
              alt="Amazon Logo"
              className="navbar__logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
          </Link>
    
          <div className="navbar__search">
            <input className="navbar__searchInput" type="text" />
            <SearchIcon className="navbar__searchIcon" />
          </div>
    
          <div className="navbar__nav">
            <Link to='/login'>
              <div 
              className="navbar__option">
                <span className="navbar__optionLineOne">Hello,Sign In
                </span>
                <span className="navbar__optionLineTwo">
                    Acount & List
                </span>
              </div>
            </Link>

            < Nav />

            <Link to='/orders'>
              <div className="navbar__option">
                <span className="navbar__optionLineOne">Returns</span>
                <span className="navbar__optionLineTwo">& Orders</span>
              </div>
            </Link>
            <CartWidget/>
          </div>
        </div>
      );
    }

export default NavBar


