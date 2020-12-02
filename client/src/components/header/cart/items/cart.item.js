import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import styles from './items.styles';
import IconButton from '@material-ui/core/IconButton';

const CartItem = ({ classes, product }) => {
  const cart = useSelector(state => state.cart.cartItems);

  React.useEffect(() => {

  }, []);

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
