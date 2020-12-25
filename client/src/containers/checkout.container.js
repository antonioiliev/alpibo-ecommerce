import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles/checkout.styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Login from '../components/myaccount/login/login.component';
import Register from '../components/myaccount/register/register.component';
import routes from '../constants/routes.json';
import FormElement from '../components/myaccount/form.element';
import { saveShippingAddress } from '../redux/actions/cart.actions';
import { createOrder } from '../redux/actions/order.actions';

const Checkout = ({ classes, match, history }) => {
    const { user } = useSelector(state => state.userLogin);
    const { cartItems, shippingAddress } = useSelector(state => state.cart);
    const { order, success, error } = useSelector(state => state.orderCreate);
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [subTotal, setSubTotal] = React.useState(0);
    const [paymentMethodValue, setPaymentMethodValue] = React.useState('credit-card');
    const [TCs, setTCs] = React.useState(false);
    const [userShippingData, setUserShippingData] = React.useState({
        name: shippingAddress.name || '',
        email: shippingAddress.email || '',
        phone: shippingAddress.phone || '',
        address: shippingAddress.address || '',
        city: shippingAddress.city || '',
        postcode: shippingAddress.postcode || '',
        country: shippingAddress.country || ''
    });

    const dispatch = useDispatch();

    const choosePaymentMethod = (event) => {
        setPaymentMethodValue(event.target.value);
    };

    const handleShippingDataChange = (field, value) => {
        setUserShippingData(prevState => {
            return { ...prevState, [field]: value }
        });
    }

    const handleChange = (event) => {
        setTCs(event.target.checked);
    };

    const finishCheckout = (e) => {
        e.preventDefault();
        console.log('finishing checkout');
        dispatch(saveShippingAddress(userShippingData));
        dispatch(createOrder({
            orderItems: cartItems,
            shippingAddress: shippingAddress,
            paymentMethod: paymentMethodValue
        }))
    };

    React.useEffect(() => {
        if (cartItems.length > 0) {
            const subTotalValue = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
            setSubTotal(subTotalValue.toFixed(2));
        }
    }, [cartItems])

    React.useEffect(() => {
        if (user && user.email) {
            // TODO perform JWT token verification
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, [user, history, match, history.location.pathname]);

    React.useEffect(() => {
        if (success && order._id) {
            history.push(`/order/${order._id}`)
        }
    }, [history, order, success])

    return (
        <div className={classes.root}>
            <h1 className={classes.h1}>Checkout</h1>

            <form onSubmit={finishCheckout} className={classes.checkoutFields}>
                <div className={classes.checkoutFieldsRow}>
                    <div className={classes.halfRow}>
                        <FormElement 
                            type="text"
                            label="Full Name"
                            required
                            value={userShippingData.name}
                            handleChange={(e) => handleShippingDataChange('name', e.target.value)}
                        /> 
                    </div>
                    <div className={classes.halfRow}>
                        <FormElement 
                            type="email"
                            label="Email"
                            required
                            value={userShippingData.email}
                            handleChange={(e) => handleShippingDataChange('email', e.target.value)}
                        /> 
                    </div>
                    <FormElement 
                        type="tel"
                        label="Phone"
                        required
                        value={userShippingData.phone}
                        handleChange={(e) => handleShippingDataChange('phone', e.target.value)}
                    /> 
                    <div className={classes.halfRow}>
                        <FormElement 
                            type="text"
                            label="Address"
                            required
                            value={userShippingData.address}
                            handleChange={(e) => handleShippingDataChange('address', e.target.value)}
                        /> 
                    </div>
                    <div className={classes.halfRow}>
                        <FormElement 
                            type="text"
                            label="City"
                            required
                            value={userShippingData.city}
                            handleChange={(e) => handleShippingDataChange('city', e.target.value)}
                        /> 
                    </div>
                    <div className={classes.halfRow}>
                        <FormElement 
                            type="text"
                            label="Post Code"
                            required
                            value={userShippingData.postcode}
                            handleChange={(e) => handleShippingDataChange('postcode', e.target.value)}
                        /> 
                    </div>
                    <div className={classes.halfRow}>
                        <FormElement 
                            type="text"
                            label="Country"
                            required
                            value={userShippingData.country}
                            handleChange={(e) => handleShippingDataChange('country', e.target.value)}
                        /> 
                    </div>
                </div>
                
                <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Choose a payment method</FormLabel>
                    <RadioGroup aria-label="payment-method" name="payment-method" value={paymentMethodValue} onChange={choosePaymentMethod}>
                        <FormControlLabel value="credit-card" control={<Radio color="primary" />} className={classes.stripe} label="Credit Card (Stripe)" />
                        <FormControlLabel value="paypal" control={<Radio color="primary" />} className={classes.paypal} label="Paypal" />
                    </RadioGroup>
                </FormControl>
                </div>

                <FormControlLabel
                    control={<Checkbox color="primary" checked={TCs} onChange={handleChange} name="terms-and-conditions" />}
                    label="I agree to the terms and conditions"
                />
                <button type="submit" onClick={finishCheckout} className={classes.submitButton}>Complete order</button>
                
            </form>
        </div>
    );
};

export default withStyles(styles)(Checkout);
