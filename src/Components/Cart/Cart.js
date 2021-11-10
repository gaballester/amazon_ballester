import { useContext } from "react";
import { contexto } from "../../Context/CartContext"
//import Item from "../Item/Item";


const Cart = () => {

    const resultado = useContext(contexto);

    let totalQty = resultado.totalUnits()

    console.log('Cart',resultado)
    console.log('Total Units',totalQty)


    return (
        <>
        { resultado && resultado.length > 0  ? 
          resultado.cart.map(item => {
            return <div key={item.id}>
                {resultado.id}
               {/* <Item item={item} /> */}
            </div>
         })       
          : "cart empty"}
    </>

    )
}

export default Cart

