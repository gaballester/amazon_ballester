import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "../../Context/CartContext"
// -------------------------------------------------------------------
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// -------------------------------------------------------------------
import Container from '@mui/material/Container'


const useStyles = makeStyles({
    root: {
        maxWidth: 550
    },
    media: {
        height: "400px"
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
        <>

            <Container  >
                <Card className={classes.root}>
                    <CardMedia
                        className={classes.media}
                        image={pictureUrl}
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {branch} - {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description1} - {description2} - {description3} - {description4} - {description5}
                        </Typography>
                        <div>
                            <Typography gutterBottom variant="h5" component="div">
                                u$s {price}
                            </Typography>
                            <   div className="itemDetail__rating">
                                {Array(starts)
                                    .fill()
                                    .map((_, i) => (
                                        <p key={i}>🌟</p>
                                    ))}
                            </div>
                        </div>
                        <div className="itemDetail__Count">
                            <ItemCount onAdd={stateUplistindFromCount} />
                            
                        </div>
                        <div className="itemDetail__button">
                            <Link to="/">
                                <Button
                                    variant="outlined"
                                    size="small"
                                    disableElevation
                                    onClick={() => { }}>
                                    View All Products
                                </Button>
                            </Link>
                            <Link to="/cart">
                                <Button
                                    variant="outlined"
                                    size="small"
                                    disableElevation
                                    onClick={() => { }}>
                                    Go to Cart
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </Container>



        </>
    );




}

export default ItemDetail
