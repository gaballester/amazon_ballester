import { useContext } from "react";
import { contexto } from "../../Context/CartContext"
import { Link } from 'react-router-dom'
// componentes de table
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
// estos dos los usa el container
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
// para uso de grupo de botones
import ButtonGroup from '@mui/material/ButtonGroup'
import Alert from '@mui/material/Alert';


const Cart = () => {

  const resultado = useContext(contexto)

  const buttons = [
    <Link to="/">
      <Button key="addMore" variant="outlined" >Add More Products</Button>
    </Link>
  ]

  if (resultado.cart.length > 0) {
    buttons.push(<Button key="emptyCard"
      onClick={() => resultado.emtyCart()}
    >Empty Cart</Button>)
    buttons.push(<Button key="checkout">Checkout</Button>)
  }

  function currencyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  // https://mui.com/components/tables/

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="spanning table">
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
                <TableCell>Eliminar</TableCell>
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
              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={3}>Subtotal</TableCell>
                <TableCell align="right">{currencyFormat(resultado.totalPrice())}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Tax</TableCell>
                <TableCell align="right">{`${(resultado.taxRate * 100).toFixed(0)} %`}</TableCell>
                <TableCell align="right">{currencyFormat(resultado.totalTax())}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell align="right">{currencyFormat(resultado.totalOrder())}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        {resultado.totalUnits() ? null : <div>   
        <Alert severity="warning">This is a warning alert — Your cart is empty, press the Add More Products button to access all the products and choose which ones you want to add to your cart</Alert>
        </div>}  
        <ButtonGroup color="secondary" aria-label="medium secondary button group">
          {buttons}
        </ButtonGroup>
      </Container>
    </>
  )
}

export default Cart

