import "./Item.css"

const Item = ({ item }) => {
    return (

        <div className="item" id={item.id}>

                <img src={item.pictureUrl} alt="" />
 
            <div className="item__info">
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

            <button >View Details</button>
        </div>
    )
}

export default Item
