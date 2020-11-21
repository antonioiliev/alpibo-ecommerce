import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './product.styles';

const Product = ({ classes, product }) => {
    const { _id, name, image, description, category, price, countInStock, rating, numReviews } = product;

    return (
        <div className={classes.root}>
            <img src={image} className={classes.image} alt={name} />
            <p>{name}</p>
            <p>{price}</p>
        </div>
    )
}

export default withStyles(styles)(Product);
