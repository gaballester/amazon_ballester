import "../Item/Item.css"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom';
import { TextField, Button } from "@material-ui/core"


const ItemDetail = ({ item }) => {


    const { id, branch, description1, description2, description3, description4, description5, title, pictureUrl, starts, price } = item[0];

    return (


        <div className="item" key={item[0].id} id={item.id}>

            <img src={pictureUrl} alt="" />

            <div className="item__info" key={id}>
                <h2>{title} ({id})</h2>
                <div>
                    <ul>
                        <li className="item__li">{description1}</li>
                        <li className="item__li">{description2}</li>
                        <li className="item__li">{description3}</li>
                        <li className="item__li">{description4}</li>
                        <li className="item__li">{description5}</li>
                    </ul>
                </div>
                <div className="item__price">
                    <p>
                        <small>$</small><strong>{price}</strong>
                    </p>
                </div>
                <div className="item__rating">
                    {Array(starts)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}
                </div>
                <div>
                    <ItemCount qty={1} stk={10} />
                    <Button
                        variant="contained"
                        size="small"
                        disableElevation
                        // onClick={ }
                        >
                            Add to Cart
                    </Button>
                </div>
                <ul>
                    <li className="item__li">
                        <Link to={'/'}>Return Home</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ItemDetail
