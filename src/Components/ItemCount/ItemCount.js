import React, { useState } from "react"
import { TextField, Button } from "@material-ui/core"
import { Add, Remove } from "@material-ui/icons"
import "./itemCount.css";


const ItemCount = ({onAdd}) => {


  // Set the initial count state to Cart quantity
  const [count, setCount] = useState(1)


  // Create handleIncrement event handler only exist stock
  const increment = () => {
    // if (count < param.stk) {
      setCount(count + 1)
    //}
  }

  //Create handleDecrement event handler
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (

    <>
    <div className="counter" >
      <Button 
        variant="outlined"
        size="small"
        disableElevation
        startIcon={<Remove />}
        onClick={decrement}>
      </Button>

      <TextField 
          style = {{width: 50}}
          label={count} 
          size="small"
          variant="outlined" 
          disabled
           />

      <Button
        variant="outlined"
        color="primary"
        size="small"
        disableElevation
        startIcon={<Add />}
        onClick={increment}>
      </Button>

    </div>
    <div>
        <Button
        variant="outlined"
        color="primary"
        size="small"
        disableElevation
        onClick={() => onAdd(count)}>
          Add to Cart
      </Button>
    </div>
    </>

  )
}

export default ItemCount