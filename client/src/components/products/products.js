import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import products from './products.list';
import styles from './products.styles';
import Product from './product.single';

const Products = ({ classes }) => {
    return (
        <div className={classes.root}>
            {products.map((product) => {
                return <Product product={product} />
            })}
        </div>
    )
}

export default withStyles(styles)(Products);
