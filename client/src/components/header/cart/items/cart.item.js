import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './items.styles';

const CartItem = ({ classes, product }) => {

  return (
    <div key={`key-${product.product}`} className={classes.root}>
      <img className={classes.productImage} src={product.image} alt={product.name} />
      <div className={classes.productData}>
        <h5 className={classes.productName}>{product.name}</h5>
        <p className={classes.productPrice}>{product.qty} x ${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}


export default withStyles(styles)(CartItem);
