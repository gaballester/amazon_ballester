import Item from "../Item/Item"

const ItemList = ({param}) => {
  // console.log("aqui recibio param")
  // console.log(param)
  return (
    <>
        { param && param.length > 0  ? 
          param.map(item => {
            return <div key={item.id}>
               <Item item={item} />
            </div>
         })       
          : "Item List Loading..."}

    </>
  )
}

export default ItemList
