import React, { useState } from "react"
import { Button, TextField, Grid } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import "./itemCount.css";


const ItemCount = ({ onAdd }) => {


  const [count, setCount] = useState(1)
  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (

    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justify-content="center"
      style={{ minHeight: "10vh" }}
    >
      <div className="counter__item">
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

      </div >
      <div className="counter__item">
        <Button
          variant="contained"
          color="success"
          disableElevation
          onClick={() => onAdd(count)}>
          Add to Cart
        </Button>
      </div>

    </Grid>

  )
}

export default ItemCount