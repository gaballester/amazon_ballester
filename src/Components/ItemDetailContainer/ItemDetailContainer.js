import React, { useEffect, useState } from "react";
import productos from "../../json/products.json"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

    const { id } = useParams();

    const [item, setItem] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setItem(
                productos.filter(item => item.id === parseInt(id))
            )       
        }, 2000);
      },[]);   

      if (item.length === 0) {
        return <p>Finding product ...</p>;
      } else 
      {

        return (
        <>
            <ItemDetail item={item} />
        </>
        )
      }

}



export default ItemDetailContainer;

