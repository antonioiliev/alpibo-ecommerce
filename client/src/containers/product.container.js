import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import Rating from '../components/products/rating/rating';
import styles from './styles/productpage.styles';
import { listProductDetails } from '../redux/actions/product.actions';

const ProductPage = ({ classes, match }) => {
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);
    const { loading, product, error } = productDetails;

    const [qty, setQty] = React.useState(0);

    const addToCart = () => {

    }

    const changeQty = (e) => {
        if (e.target.value > 0 && e.target.value <= product.countInStock) {
            setQty(e.target.value);
        }
    } 

    React.useEffect(() => {
        dispatch(listProductDetails(match.params.id));
    }, [match]);

    return (
        <div className={classes.root}>
            <div className={classes.leftCol}>
                {product.image && !loading ? (
                    <img src={product.image} className={classes.productImage} alt={product.name} />
                ) : (
                    <Skeleton variant="rect" className={classes.imageLoader} />
                )}
            </div>
            <div className={classes.rightCol}>
                {product.name && !loading ? (
                    <h1 className={classes.h1}>{product.name}</h1>
                ) : (
                    <Skeleton variant="rect" className={classes.nameLoader} />
                )}
                <Rating rating={product.rating} numReviews={product.numReviews} />

                {product.description && !loading ? (
                    <p>{product.description}</p>
                ) : (
                    <Skeleton variant="rect" className={classes.descriptionLoader} />
                )}

                {product.price && !loading ? (
                    <p>${product.price}</p>
                ) : (
                    <Skeleton variant="rect" className={classes.priceLoader} />
                )}
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
