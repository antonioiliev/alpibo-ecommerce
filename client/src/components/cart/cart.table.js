import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import styles from './table.styles';

const CartItemsTable = ({ classes }) => {
    const cart = useSelector(state => state.cart.cartItems);
    
    return (
        <table className={classes.table}>
            <thead>
                <th className='imageTH'>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </thead>
            <tbody>
                {cart.map((item, index) => {
                    return (
                        <tr>
                            <td className="imageTD"><img src={item.image} className={classes.productImage} alt={item.name} /></td>
                            <td>{item.name}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>{item.qty}</td>
                            <td>${(item.qty*item.price).toFixed(2)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
      
}

export default withStyles(styles)(CartItemsTable);
