import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from '../ItemList/ItemList'
import productos from "../../json/products.json"


const ItemListContainer = (param) => {

const { categoryId } = useParams()
const [items, setItems] = useState([])

  useEffect(() => {
    setTimeout(() => {
      if (categoryId) {
        const productos_filtrados = productos.filter(producto => producto.category === categoryId)
        console.log(productos_filtrados)
        setItems(productos_filtrados)
      } else {
        setItems(productos);
      }   

    }, 2000);
  }, [categoryId]);

  

  if (items.length === 0) {
    return <p>Loading Products...</p>;
  } else {
    return (
      <>
        <ItemList param={items} />
      </>
    )
  }

}

export default ItemListContainer;