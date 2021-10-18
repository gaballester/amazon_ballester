import "./navBar.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
          <Link to="/">
            <img
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
    
            <Link to='/orders'>
              <div className="navbar__option">
                <span className="navbar__optionLineOne">Returns</span>
                <span className="navbar__optionLineTwo">& Orders</span>
              </div>
            </Link>
            <Link to="/checkout">
              <div className="navbar__optionBasket">
                <span className="nav-cart-icon"></span>
                <ShoppingBasketIcon/>
                <span className="navbar__optionLineTwo navbar__basketCount">
                  0
                </span>
              </div>
            </Link>
          </div>
        </div>
      );
    }

export default NavBar


