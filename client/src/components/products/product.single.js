import React from 'react'
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './product.styles';
import Rating from './rating/rating';

const Product = ({ classes, product }) => {
    const { _id, name, image, description, category, price, countInStock, rating, numReviews } = product;

    return (
        <div key={`product-div-${_id}`} className={classes.root}>
            <Link to={`/product/${_id}`} alt={name}><img src={image} className={classes.image} alt={name} /></Link>
            <Link to={`/product/${_id}`} alt={name} className={classes.title}>{name}</Link>
            <Rating rating={rating} numReviews={numReviews} />
            <p>${price}</p>
        </div>
    )
}

export default withStyles(styles)(Product);
