import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Rating from '../components/products/rating/rating';
import products from '../components/products/products.list';
import routes from '../constants/routes.json';
import styles from './productpage.styles';

const ProductPage = ({ classes, match }) => {
    const product = products.find(product => product._id === match.params.id);
    const [qty, setQty] = React.useState(0);

    const addToCart = () => {

    }

    const changeQty = (e) => {
        if (e.target.value > 0 && e.target.value <= product.countInStock) {
            setQty(e.target.value);
        }
    } 

    return (
        <div className={classes.root}>
            <div className={classes.leftCol}>
                <img src={product.image} className={classes.productImage} alt={product.name} />
            </div>
            <div className={classes.rightCol}>
                <h1 className={classes.h1}>{product.name}</h1>
                <Rating rating={product.rating} numReviews={product.numReviews} />
                <p>{product.description}</p>
                <p>${product.price}</p>
                <div>
                    {product.countInStock > 0 ? (
                        <React.Fragment>
                            <input type="number" id="qty" value={qty} onChange={changeQty} className={classes.qtyInput} />
                            <button onClick={addToCart} className={classes.addToCartButton}>Add to cart</button>
                        </React.Fragment>
                    ) : <p className={classes.outOfStockP}>The product is out of stock</p>}
                    
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(ProductPage);
