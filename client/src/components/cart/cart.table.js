import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { changeItemQuantity, removeItemFromCart } from '../../redux/actions/cart.actions';
import styles from './table.styles';
import DeleteIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';


const CartItemsTable = ({ classes }) => {
    const cart = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();
    const changeQuantity = (e, product) => {
        const quantity = parseInt(e.target.value);

        if (quantity > 0) {
            dispatch(changeItemQuantity(product, quantity));
        }
    }

    const deleteItemFromCart = (product) => {
        dispatch(removeItemFromCart(product));
    }

    return (
        <table className={classes.table}>
            <thead>
                <tr>
                    <th/>
                    <th className='imageTH'>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item, index) => {
                    return (
                        <tr key={`index-${index}`}>
                            <td>
                                <IconButton className={classes.itemDeleteButton} size="small" onClick={() => deleteItemFromCart(item.product)}>
                                    <DeleteIcon />
                                </IconButton>
                            </td>
                            <td className="imageTD"><img src={item.image} className={classes.productImage} alt={item.name} /></td>
                            <td>{item.name}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td><input type="number" value={item.qty} onChange={(e) => changeQuantity(e, item.product)} /></td>
                            <td>${(item.qty*item.price).toFixed(2)}</td>
                            
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
      
}

export default withStyles(styles)(CartItemsTable);
