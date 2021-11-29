import "./Item.css"
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {
        maxWidth: "40vh",
        minHeight: "40vh",
        maxHeight: "55vh",
        margin: "0 auto",
        marginTop: "2rem",
        marginBottom: "2rem",
        textAlign: "center",

    },
    media: {
        height: "40%"
    }
});


const Item = ({ item }) => {

    const classes = useStyles();
    return (

        <Grid
            container
            direction="column"
            alignItems="stretch"
            justify="center"
            style={{ minHeight: "57vh" }}
        >
            <Card className={classes.root}>

                <Typography gutterBottom variant="h5" component="h2">
                    {item.branch.toUpperCase()}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                </Typography>

                <CardMedia
                    className={classes.media}
                    image={item.pictureUrl}
                    title={item.title}
                    component="img"
                    height="194"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.description1} - {item.description2}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        u$s {item.price}
                    </Typography>
                    <Grid className="itemDetail__rating">
                        {Array(item.starts)
                            .fill()
                            .map((_, i) => (
                                <p key={i}>🌟</p>
                            ))}
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justify="center"
                        style={{ minHeight: "100px"}}                        
                    >
                        <Link to={`/itemDetail/${item.id}`}>View Details</Link>

                    </Grid>

               </CardContent>
            </Card>
        </Grid >
    )
}

export default Item
