import Alert from '@mui/material/Alert'
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const OrderMsgOk = (param) => {

    const { orderId } = useParams()

    return (
        <>
            {
                orderId.lenght > 0 && orderId?
                    <>
                        <Alert severity="Error">Error processing Order.</Alert>
                        <Link to="/cart">
                            <Button key="goCart" variant="outlined" >Go Cart</Button>
                        </Link>
                    </>

                    :
                    <>
                        <Alert severity="success">`Congratullations!!! Order created successfully with ID:  {orderId}. Thank you very much for your purchase, we remain at your service.`</Alert>
                        <Link to="/">
                            <Button key="goHome" variant="outlined" >Go to Home Page</Button>
                        </Link>
                    </>
            }
        </>
    )
}

export default OrderMsgOk
