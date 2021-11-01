import "../Item/Item.css"
const ItemDetail = ({item}) => {

    return (

        
        <div className="item" key={item.id} id={item.id}>

            <p>{item.id}</p>
            <p>{item.description}</p>

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
        </div>
    )
}

export default ItemDetail
