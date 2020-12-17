import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './styles/product.styles';
import Rating from './rating/rating';
import { addToCart as addToCartAction } from '../../redux/actions/cart.actions';

const Product = ({ classes, product }) => {
    const { _id, name, image, price, rating, numReviews } = product;
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addToCartAction(_id, 1));
    }

    return (
        <div key={`product-div-${_id}`} className={classes.root}>
            <Link to={`/product/${_id}`} alt={name}><img src={image} className={classes.image} alt={name} /></Link>
            <div className={classes.productInfo}>
                <Link to={`/product/${_id}`} alt={name} className={classes.title}>{name}</Link>
                <Rating rating={rating} numReviews={numReviews} />
                <p className={classes.price}>${price.toFixed(2)}</p>
            </div>
            <Button 
                variant="contained" 
                className={classes.addToCartButton} 
                color="primary"
                onClick={addToCart}
            >
                Add to cart
            </Button>
        </div>
    )
}

export default withStyles(styles)(Product);
