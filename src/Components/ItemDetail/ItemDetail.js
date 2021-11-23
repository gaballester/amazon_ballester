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
import Container from '@mui/material/Container'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {
        maxWidth: 450
    },
    media: {
        height: "350px"
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
