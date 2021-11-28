import React, { useState } from "react"
import { Button, TextField, Grid } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import "./itemCount.css";


const ItemCount = ({ onAdd }) => {


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

    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "10vh" }}
    >
      <Grid spacing={4}>
        <Button
          variant="outlined"
          disableElevation
          size="large"
          startIcon={<Remove />}
          onClick={decrement}>
        </Button>

        <TextField
          style={{ width: 50 }}
          label={count}
          variant="outlined"
          size="small"
          disabled
        />

        <Button
          variant="outlined"
          color="primary"
          disableElevation
          size="large"
          startIcon={<Add />}
          onClick={increment}>
        </Button>

      </Grid>
      <Grid >
        <Button
          variant="contained"
          color="success"
          disableElevation
          onClick={() => onAdd(count)}>
          Add to Cart
        </Button>
      </Grid>
    </Grid>

  )
}

export default ItemCount