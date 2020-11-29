import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/cart.styles';

const CartPage = ({ classes }) => {
    return (
        <div>
            <h1 className={classes.h1}>THIS IS THE CART PAGE</h1>
        </div>
    )
}

export default withStyles(styles)(CartPage);
