import React, { useState } from "react"
import { TextField, Button } from "@material-ui/core"
import { Add, Remove } from "@material-ui/icons"
import "./itemCount.css";


const ItemCount = (props) => {
  // Set the initial count state to Cart quantity
  const [count, setCount] = useState(props.qty)

  // Create handleIncrement event handler only exist stock
  const increment = () => {
    if (count < props.stk) {
      setCount(count + 1)
    }
  }

  //Create handleDecrement event handler
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className="counter">
      <Button
        variant="text"
        variant="contained"
        size="small"
        disableElevation
        startIcon={<Remove />}
        onClick={decrement}>
      </Button>

      <TextField id="outlined-basic" label={count} variant="outlined" />

      <Button
        variant="text"
        variant="contained"
        size="small"
        disableElevation
        startIcon={<Add />}
        onClick={increment}>
      </Button>

    </div>

  );
}

export default ItemCount