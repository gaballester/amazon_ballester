import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <>
            <Link to="/checkout">
                <div className="navbar__optionBasket">
                    <span className="nav-cart-icon"></span>
                    <ShoppingBasketIcon />
                    <span className="navbar__optionLineTwo navbar__basketCount">
                        0
                    </span>
                </div>
            </Link>
        </>
    )

}

export default CartWidget

