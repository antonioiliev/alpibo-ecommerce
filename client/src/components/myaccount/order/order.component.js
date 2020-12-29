import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { getOrderDetails } from '../../../redux/actions/order.actions';
import styles from './order.styles';

const Order = ({ classes, match }) => {
    const { orderId } = match.params;
    const dispatch = useDispatch();
    const { loading, order, error } = useSelector(state => state.orderDetails);
    const [totalOrderPrice, setTotalOrderPrice] = React.useState(0);

    React.useEffect(() => {
        if (orderId) {
            dispatch(getOrderDetails(orderId));
        }
    }, []);

    React.useEffect(() => {
        console.log('order', order);
        if (order.totalPrice !== 0) {
            setTotalOrderPrice(order.totalPrice);
        } else {
            const total = order.orderItems.reduce((acc, item) => acc + item.qty * item.price, 0);
            setTotalOrderPrice(total.toFixed(2));
        }
    }, [order]);

    // TODO - insert a skeleton loader
    return (
        <div className={classes.root}>
            {order.shippingAddress ? (
                <div className={classes.contentDiv}>
                    {/* TODO - add a pay now button */}
                    <h2>Order {order._id} - {order.isPaid ? <span className={classes.paid}>PAID</span> : <span className={classes.unpaid}>NOT PAID</span>}</h2>

                    <div className={classes.orderInfoDiv}>
                        <div>
                            <h3>Shipping</h3>
                            <div>
                                <p>{order.shippingAddress.name}</p>
                                <p>{order.shippingAddress.email}</p>
                                <p>{order.shippingAddress.phone}</p>
                                <p>{order.shippingAddress.address}</p>
                                <p>{order.shippingAddress.city}</p>
                                <p>{order.shippingAddress.postcode}</p>
                                <p>{order.shippingAddress.country}</p>
                            </div>
                        </div>
                        <div>
                            <h3>Payment Method</h3>
                            <p>{order.paymentMethod === 'credit-card' ? 'Credit card (Stripe)' : 'PayPal'}</p>
                        </div>

                    </div>

                    <h3>Order Items</h3>
                    {order.orderItems.length > 0 ? (
                        order.orderItems.map((item) => {
                            return <div className={classes.orderItem}>
                                <img src={process.env.PUBLIC_URL + item.image} alt={item.name} />
                                <h5>{item.name}</h5>
                                <p>{item.qty} x ${item.price.toFixed(2)}</p>
                            </div>
                        })
                    ) : 'No items to show'}

                    <h3>Order Summary</h3>
                    <table className={classes.table}>
                        <thead>
                            <tr>
                                <th/>
                                <th/>
                            </tr>
                        </thead>
                        <tbody>
                           <tr>
                               <td>Number of Items</td>
                               <td>{order.orderItems.length}</td>
                           </tr>
                           <tr>
                               <td>Total Price</td>
                               <td>${totalOrderPrice}</td>
                           </tr>
                        </tbody>
                    </table>
                </div>
            ) : error ? <p className={classes.error}>{error}</p> : null}
        </div>
    )
}

export default withStyles(styles)(Order);
