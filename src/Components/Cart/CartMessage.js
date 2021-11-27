import {Alert,AlertTitle} from '@mui/material'
import { useParams } from "react-router-dom";
import { Button, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'

const OrderMsgOk = (param) => {

    const { orderId } = useParams()

    const useStyles = makeStyles(theme => ({
        margin: {
            margin: 2,
        },
        papper: {
            padding: "20px",
            width: "90%",

        },

    }));


    return (
        <>
            {
                orderId.lenght > 0 && orderId ?
                    <>
                        <Grid m={4} container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center">
                            <Alert severity="Error">Error processing Order.</Alert>
                            <Link to="/cart">
                                <Button key="goCart" variant="outlined" >Go Cart</Button>
                            </Link>
                        </Grid>

                    </>

                    :
                    <Grid m={4} container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center">
                        <Grid m={4} >
                            <Alert severity="success">
                                <AlertTitle>Success</AlertTitle>
                                Congratullations!!! Order created successfully with ID: <strong>{orderId}</strong>. </Alert>
                        </Grid>
                        <Grid m={4} >
                            <h4>Thank you very much for your purchase, we remain at your service.</h4>
                        </Grid>
                        <Grid m={4} >
                            <Link m={4} to="/">
                                <Button key="goHome" variant="contained" >Go to Home Page</Button>
                            </Link>
                        </Grid>
                    </Grid>
            }
        </>
    )
}

export default OrderMsgOk
