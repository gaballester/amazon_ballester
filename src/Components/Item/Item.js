import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({ item }) => {

    return (

        <div className="item" id={item.id}>

            <h3>{item.title}</h3>
            <img src={item.pictureUrl} alt="" />

            <div className="item__info" >

                <p>{item.description1}</p>
                <p>{item.description2}</p>
                <h3>Price: {item.price}</h3>

                <div className="item__rating">
                    {Array(item.starts)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>🌟</p>
                        ))}
                </div>
                <Link to={`/itemDetail/${item.id}`}>View Details</Link>
            </div>
        </div>
    )
}

export default Item
