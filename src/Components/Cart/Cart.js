import { useContext, useState } from "react";
import { contexto } from "../../Context/CartContext"
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Paper, Box, Button, Grid } from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete'

import Container from '@mui/material/Container'
import ButtonGroup from '@mui/material/ButtonGroup'
import Alert from '@mui/material/Alert'
import db from '../../firebase.config'
import Buyer from "../../Components/Buyer/Buyer"

const Cart = () => {

  const resultado = useContext(contexto)
  const { push } = useHistory();
  const [viewBuyer, setViewBuyer] = useState(false)

  const stateUplistindFromBuyer = (buyerData) => {
    setViewBuyer(false)
    const Order = {
      orderDate: new Date().toLocaleDateString(),
      buyer: {
        name: buyerData.name,
        email: buyerData.email,
        phone: buyerData.phone,
        address: buyerData.address
      },
      items: resultado.cart,
      tax: resultado.totalTax(),
      total: resultado.totalOrder(),
    }

    console.log(Order)
    const collection = db.collection('Orders')
    const query = collection.add(Order)

    query.then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      resultado.emtyCart()
      push(`/CartMessage/${docRef.id}`)
    }).catch(function (error) {
      console.error("Error adding document: ", error);
      <div>
        <Alert severity="warning">Error to create Order.</Alert>
      </div>
    });

  }

  const buttons = [
    <Link to="/">
      <Button key="addMore" variant="contained" color="primary" >Add More Products</Button>
    </Link>
  ]

  if (resultado.cart.length > 0) {
    buttons.push(<Button key="emptyCard" variant="contained" color="secondary"
      onClick={() => {
        setViewBuyer(false)
        resultado.emtyCart()
      }}>Empty Cart</Button>)
    buttons.push(<Button key="checkout"
      onClick={() => setViewBuyer(true)}
    >Checkout</Button>)
  }

  function currencyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  return (

    <Container maxWidth="lg" >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table" >
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={6}>
                ORDER SUMMARY
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" colSpan={4}>
                Details
              </TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Picture</TableCell>
              <TableCell>Item Description</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Unit price</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resultado.cart.map((item) => (
              <TableRow key={item.id}>
                <TableCell><img src={item.pictureUrl.replace('.jpg', '_small.jpg')} alt={item.title} /></TableCell>
                <TableCell>{item.description1}</TableCell>
                <TableCell align="right">{item.qty}</TableCell>
                <TableCell align="right">{currencyFormat(item.price)}</TableCell>
                <TableCell align="right">{currencyFormat(item.price * item.qty)}</TableCell>
                <TableCell>
                  <Button onClick={() => { resultado.removeFromCart(item.id) }} color="error" startIcon={<DeleteIcon />}></Button>
                </TableCell>
              </TableRow>

            ))}
            <TableRow key='subTotal'>
              <TableCell rowSpan={3} />
              <TableCell colSpan={3}>Subtotal</TableCell>
              <TableCell align="right">{currencyFormat(resultado.totalPrice())}</TableCell>
            </TableRow>
            <TableRow key='tax'>
              <TableCell colSpan={2}>Tax</TableCell>
              <TableCell align="right">{`${(resultado.taxRate * 100).toFixed(0)} %`}</TableCell>
              <TableCell align="right">{currencyFormat(resultado.totalTax())}</TableCell>
            </TableRow>
            <TableRow key='total'>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell align="right">{currencyFormat(resultado.totalOrder())}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {resultado.totalUnits() ? null : <Box my={2}>
        <Alert severity="warning">This is a warning alert ??? Your cart is empty, press the Add More Products button to access all the products and choose which ones you want to add to your cart</Alert>
      </Box>}

      <Grid m={4} container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center">
        <ButtonGroup variant="contained" aria-label="medium secondary button group">
          {buttons}
        </ButtonGroup>

      </Grid>
      {viewBuyer ? <Buyer onAddBuyer={stateUplistindFromBuyer} /> : null}

    </Container>

  )
}

export default Cart

