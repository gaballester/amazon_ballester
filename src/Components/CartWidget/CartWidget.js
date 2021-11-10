import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "../../Context/CartContext"

const CartWidget = () => {

    const cart = useContext(contexto);

  
    return (
        <>
            <Link to="/checkout">
                <div className="navbar__optionBasket">
                    <span className="nav-cart-icon"></span>
                    <ShoppingBasketIcon />
                    <span className="navbar__optionLineTwo navbar__basketCount">
                        {cart.totalUnits()}
                    </span>
                </div>
            </Link>
        </>
    )

}

export default CartWidget

