import Item from "../Item/Item"
import "../../index.css"

const ItemList = ({param}) => {
  return (
    <div className="grid-container">
        { param && param.length > 0  ? 
          param.map(item => {
            return <div key={item.id}>
               <Item item={item} />
            </div>
         })       
          : "Error reciving Item List parameters..."}
    </div>
  )
}

export default ItemList
