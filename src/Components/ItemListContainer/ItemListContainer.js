import React from 'react'
import ItemCount from "../ItemCount/ItemCount"

export const ItemListContainer = (param) => {
    return (
        <div>
            <h1>{param.greeting}</h1>
            <ItemCount qty={4} stk={10}/>
        </div>
    )
}
