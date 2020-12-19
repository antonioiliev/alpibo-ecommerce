import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles/products.styles';
import Product from './product.single';
import { listProducts } from '../../redux/actions/product.actions';
import ProductsLoader from './products.loader.js';

const Products = ({ classes }) => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { loading, products } = productList;

    React.useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div className={classes.root}>
            {loading && <ProductsLoader />}
            {products.length > 0 ? products.map((product, index) => {
                return <Product key={`product-${index}`} product={product} />
            }) : <p>No products to display</p>}
        </div>
    )
}

export default withStyles(styles)(Products);
