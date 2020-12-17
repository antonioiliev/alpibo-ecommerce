import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './cart.styles';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Badge from '@material-ui/core/Badge';
import { 
  ShoppingBasket as CartIcon,
} from '@material-ui/icons';
import CartItem from './items/cart.item';

const HeaderCart = ({ classes }) => {
  const cart = useSelector(state => state.cart.cartItems);
  const [totalCartItems, setTotalCartItems] = React.useState('');
  const [subTotal, setSubTotal] = React.useState(0);
  const [cartDrawerOpen, setCartDrawerOpen] = React.useState(false);

  const toggleDrawer = (value) => {
    setCartDrawerOpen(value);
  };

  React.useEffect(() => {
    if (cart.length > 0) {
      setTotalCartItems(cart.reduce((acc, item) => acc + item.qty, 0));
      setSubTotal(cart.reduce((acc, item) => acc + item.qty * item.price, 0));
    } else {
      setTotalCartItems(0);
      setSubTotal(0);
    }
  }, [cart]);

  return (
    <React.Fragment>
        <IconButton color="primary" onClick={() => toggleDrawer(true)}>
          <Badge badgeContent={totalCartItems} invisible={totalCartItems.length === 0} color="primary">
            <CartIcon style={{ fontSize: 34 }} />
          </Badge>
        </IconButton>
        <Drawer anchor='right' className={classes.cartDrawer} open={cartDrawerOpen} onClose={() => toggleDrawer(false)}>
            {cart.length > 0 ? (
              <React.Fragment>
                {cart.map((product, index) => <CartItem key={`cart-item-${index}`} product={product} />)}
                <p className={classes.subTotal}>Subtotal: ${subTotal.toFixed(2)}</p>
                <div className={classes.buttonsWrapper}>
                  <Link 
                    to="/cart"
                    className={classes.reviewCartButton}
                    onClick={() => toggleDrawer(false)}
                  >
                    Review Cart
                  </Link>
                  <Link 
                    to="/checkout"
                    className={classes.checkoutButton}
                    onClick={() => toggleDrawer(false)}
                  >
                    Checkout
                  </Link>
                </div>
                

              </React.Fragment>
              ) : <p>Your cart is empty!</p>}
        </Drawer>
    </React.Fragment>
  );
}


export default withStyles(styles)(HeaderCart);
