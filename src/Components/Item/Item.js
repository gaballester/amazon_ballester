import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({ item }) => {

    return (

        <div className="item" key={item.id} id={item.id}>

            <h2>{item.title}</h2>
            <img src={item.pictureUrl} alt="" />

            <div className="item__info" >

                <p>{item.description1}</p>
                <p>{item.description2}</p>
                <h3>Price: {item.price}</h3>

                <div className="item__rating">
                    {Array(item.starts)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}
                </div>
                <a >
                    <Link to={`/itemDetail/${item.id}`}>View Details</Link>
                </a>
            </div>
        </div>
    )
}

export default Item
