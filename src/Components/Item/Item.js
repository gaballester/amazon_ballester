import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({ item }) => {

    return (

        <div className="item" key={item.id} id={item.id}>

            <img src={item.pictureUrl} alt="" />

            <div className="item__info" key={item.id}>
                <p>{item.title}</p>
                <p className="item__price">
                    <small>$</small>
                    <strong>{item.price}</strong>
                </p>
                <div className="item__rating">
                    {Array(item.starts)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}
                </div>
            </div>

            <ul>
                <li>
                    <Link to={`/itemDetail/${item.id}`}>View Details</Link>
                </li>
            </ul>

        </div>
    )
}

export default Item
