import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "../../Context/CartContext"
// -------------------------------------------------------------------
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// -------------------------------------------------------------------
import { Grid,Stack } from '@mui/material'
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
    root: {
        maxWidth: "25%",
        margin: "0 auto",
        marginTop: "2rem",
        marginBottom: "2rem",
        textAlign: "center",

    },
    media: {
        height: "25%"
    }
});


const ItemDetail = ({ item }) => {

    const classes = useStyles();

    const { id, branch, description1, description2, description3, description4, description5, title, pictureUrl, starts, price } = item[0];

    const { push } = useHistory();
    const { addToCart } = useContext(contexto);

    const stateUplistindFromCount = (qty) => {
        addToCart(id, branch, description1, title, pictureUrl, qty, price);
        push("/cart")
    }




    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
        >
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={pictureUrl}
                    title={title}
                    component="img"
                    height="194"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {branch} - {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description1} - {description2} - {description3} - {description4} - {description5}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        u$s {price}
                    </Typography>
                    <Grid className="itemDetail__rating">
                        {Array(starts)
                            .fill()
                            .map((_, i) => (
                                <p key={i}>🌟</p>
                            ))}
                    </Grid>

                    <div className="itemDetail__Count">
                        <ItemCount onAdd={stateUplistindFromCount} />

                    </div>
                    
                    <Stack direction="row" spacing={1}>          
                        <Link to="/">
                            <Button
                                variant="contained"
                                disableElevation
                                onClick={() => { }}>
                                View All Products
                            </Button>
                        </Link>
                        <Link to="/cart">
                            <Button 
                                variant="contained"
                                disableElevation
                                onClick={() => { }}>
                                Go to Cart
                            </Button>
                        </Link>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
    );

}

export default ItemDetail
