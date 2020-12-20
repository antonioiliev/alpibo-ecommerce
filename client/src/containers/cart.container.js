import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import routes from '../constants/routes.json';
import styles from './styles/cart.styles';
import CartItemsTable from '../components/cart/cart.table';

const CartPage = ({ classes }) => {
    const { cartItems } = useSelector(state => state.cart);
    const [subTotal, setSubTotal] = React.useState(0);

    React.useEffect(() => {
        if (cartItems.length > 0) {
            const subTotalValue = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
            setSubTotal(subTotalValue.toFixed(2));
        }
    }, [cartItems])

    return (
        <div>
            <h1 className={classes.h1}>Cart</h1>

            {cartItems.length > 0 ? (
                <React.Fragment>
                    <CartItemsTable />
                    <h5 style={{ textAlign: 'center', fontSize: 22 }}>Subtotal: ${subTotal}</h5>
                    <Link to={routes.CHECKOUT} className={classes.checkoutButton}>CHECKOUT</Link>
                </React.Fragment>
            ) : (
                <div>
                    <p>Your cart is empty</p>
                    <Link to={routes.HOME} />
                </div>
            
            )}
        </div>
    )
}

export default withStyles(styles)(CartPage);
