import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from '../ItemList/ItemList'
import productos from "../../json/products.json"


const ItemListContainer = (param) => {

const { categoryId } = useParams()
console.log(categoryId)
  

  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      if (categoryId) {
        const productos_filtrados = productos.filter(producto => producto.category == categoryId)
        console.log(productos_filtrados)
        setItems(productos_filtrados)
      } else {
        setItems(productos);
      }   

    }, 2000);
  }, [categoryId]);

  

  if (items.length === 0) {
    return <p>Loading all Products...</p>;
  } else {
    return (
      <>
        {/* <h1>{param.greeting}</h1>
                <div>
                    <ItemCount qty={4} stk={10} />
                </div> */}
        <ItemList param={items} />
      </>
    )
  }

}

export default ItemListContainer;