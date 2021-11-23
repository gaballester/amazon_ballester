import React, { useEffect, useState } from "react";
import db from '../../firebase.config';
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {

    const { id } = useParams();
    const [item, setItem] = useState([])


    useEffect(() => {
        const prods = db.collection('Items').doc(id);
        prods.get().then(doc => {
            if (doc.exists) {
                const newArry = []
                newArry.push({ ...doc.data(), id: doc.id })
                setItem(newArry)
            }
        });
    },[id]);

    
    if (item.length === 0) {
        return (
            <p>Loading product...</p>
        )
    } else {
        return (
            <ItemDetail item={item} />
        )
    }
}

export default ItemDetailContainer;

