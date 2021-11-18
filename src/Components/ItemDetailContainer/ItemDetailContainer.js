import React, { useEffect, useState } from "react";
import db from '../../firebase.config';
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Alert from '@mui/material/Alert';
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'


const ItemDetailContainer = () => {

    const { id } = useParams();
    const [item, setItem] = useState([])

    const buttons = [
        <Link to="/">
            <Button key="goHome" variant="outlined" >Return to Home</Button>
        </Link>
    ]

    useEffect(() => {
        const prods = db.collection('Items').doc(id);
        prods.get().then(doc => {
            if (doc.exists) {
                const newArry = []
                newArry.push({ ...doc.data(), id: doc.id })
                setItem(newArry)
            }
        });
    }, [id]);

    
    if (item.length === 0) {
        return (
            // <p>loadding</p>
            <div>
                <Alert severity="warning">The requested document was not found in the database!!! Press the following button to see all the products on the main page. Sorry for the inconvenience.</Alert>
                <ButtonGroup color="secondary" aria-label="medium secondary button group">
                    {buttons}
                </ButtonGroup>
            </div>
        )
    } else {
        return (
            <ItemDetail item={item} />
        )
    }
}

export default ItemDetailContainer;

