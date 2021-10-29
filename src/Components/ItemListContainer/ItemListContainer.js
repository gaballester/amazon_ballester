import React, { useEffect, useState } from "react";
// import ItemCount from "../ItemCount/ItemCount"
import ItemList from '../ItemList/ItemList'
import productos from "../../json/products.json"

export const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setItems(productos);
        }, 2000);
      },[]);   

      

      if (items.length === 0) {
        return <p>Initial Loading ...</p>;
      } else 
      {
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


