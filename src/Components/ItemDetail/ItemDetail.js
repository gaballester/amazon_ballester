import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "../../Context/CartContext"


const ItemDetail = ({ item }) => {

    const { id, branch, description1, description2, description3, description4, description5, title, pictureUrl, starts, price } = item[0];

    const {push} = useHistory();
    const {addToCart} = useContext(contexto);
    
    const stateUplistindFromCount = (qty) => {
        addToCart(id, branch, description1, title, pictureUrl, qty, price);
        push("/cart")
    }

    


    return (

        <div className="itemDetail" key={id} id={id}>
            <div className="itemDetail__info" >
                <h2>{branch} - {title}</h2>
                <img className="itemDetail__img" src={pictureUrl} alt="" />

                <div className="itemDetail__description">

                    <ul>
                        <li key="1" className="itemDetail__li">{description1}</li>
                        <li key="2" className="itemDetail__li">{description2}</li>
                        <li key="3" className="itemDetail__li">{description3}</li>
                        <li key="4" className="itemDetail__li">{description4}</li>
                        <li key="5" className="itemDetail__li">{description5}</li>
                    </ul>

                    <h3 className="itemDetail__price">Price: {price}</h3>

                    <div className="itemDetail__rating">
                        {Array(starts)
                            .fill()
                            .map((_, i) => (
                                <p key={i}>🌟</p>
                            ))}
                    </div>
                    <div className="itemDetail__Count">
                        <ItemCount onAdd={stateUplistindFromCount} />
                        {/* qty={1} stk={10} */}
                    </div>

                    <div className="itemDetail__button">
                        <Link to="/">
                            <Button
                                variant="contained"
                                size="small"
                                disableElevation
                                onClick={() => { }}>
                                Buy more
                            </Button>
                        </Link>
                        <Link to="/cart">
                            <Button
                                variant="contained"
                                size="small"
                                disableElevation
                                onClick={() => { }}>
                                Go to Cart
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail
