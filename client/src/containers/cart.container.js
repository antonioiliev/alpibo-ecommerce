import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import routes from '../constants/routes.json';
import styles from './styles/cart.styles';
import CartItemsTable from '../components/cart/cart.table';

const CartPage = ({ classes }) => {
    const { cartItems } = useSelector(state => state.cart);

    return (
        <div>
            <h1 className={classes.h1}>Cart</h1>

            {cartItems.length > 0 ? (
                <CartItemsTable />
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
