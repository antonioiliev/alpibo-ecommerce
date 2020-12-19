import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';
import { withStyles } from '@material-ui/core/styles';
import styles from '../myaccount.styles';
import FormElement from '../form.element';
import routes from '../../../constants/routes.json';
import { register } from '../../../redux/actions/user.actions';


const Register = ({ classes }) => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.userRegister);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleChange = e => {
        if (e.target.id === 'register_name') {
            setName(e.target.value);
        } else if (e.target.id === 'register_email') {
            setEmail(e.target.value);
        } else if (e.target.id === 'register_password') {
            setPassword(e.target.value);
        }
    }

    const registerSubmit = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password));
    }

    return (
        <div className={classes.root}>
            <h1 className={classes.h1}>Register a new account</h1>
            {error && <p className={classes.error}>{error}</p>}
            <form>
                <FormElement 
                    type="text"
                    id="register_name"
                    label="Name"
                    value={name}
                    handleChange={handleChange}
                /> 

                <FormElement 
                    type="email"
                    id="register_email"
                    label="Email"
                    value={email}
                    handleChange={handleChange}
                /> 

                <FormElement 
                    type="password"
                    id="register_password"
                    label="Password"
                    value={password}
                    handleChange={handleChange}
                /> 
                <p>Already have an account? <Link to={routes.LOGIN}>Sign in</Link></p>
                {loading ? (
                    <Skeleton variant="rect" width={'100%'} height={50} />
                ) : (
                    <button type="submit" onClick={registerSubmit} className={classes.submitButton}>Register</button>
                )}
                
            </form>
        </div>
    )
}

export default withStyles(styles)(Register);
