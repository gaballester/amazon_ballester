import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from '../ItemList/ItemList'
import db from '../../firebase.config';


const ItemListContainer = (param) => {

  const { categoryId } = useParams()
  const [items, setItems] = useState([])

  useEffect(() => {

    if (categoryId) {
      const itemCollection = db.collection("Items")
      const filter = itemCollection.where("category", "==", categoryId)
      const resultado = filter.get()
      
      resultado.then(querySnapshot => {
        if (querySnapshot.length === 0) {
          console.log("No hay productos")
        } else {
          const newArry = []
          querySnapshot.forEach(doc => {
            newArry.push({...doc.data(), id: doc.id})
          })
          setItems(newArry)
        }
      })
    } else {
      const resultado = db.collection("Items").get()
      resultado.then((querySnapshot) => {
        const newArry = []
        querySnapshot.forEach((doc) => {
          newArry.push({...doc.data(),id: doc.id})
        });
        setItems(newArry)
      })
   }
  }, [categoryId])


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