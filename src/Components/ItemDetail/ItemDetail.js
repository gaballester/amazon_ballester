import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core"


const ItemDetail = ({ item }) => {


    const { id, branch, description1, description2, description3, description4, description5, title, pictureUrl, starts, price } = item[0];

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
                                <p>🌟</p>
                            ))}
                    </div>
                    <div className="itemDetail__Count">
                             <ItemCount qty={1} stk={10} />
                    </div>
               

                    <div>
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
                        <li className="itemDetail__li">
                            <Link to={'/'}>Return Home</Link>
                        </li>
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default ItemDetail
