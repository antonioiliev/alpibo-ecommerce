import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';
import { withStyles } from '@material-ui/core/styles';
import styles from './login.styles';
import FormElement from './form.element';
import routes from '../../../constants/routes.json';
import { login } from '../../../redux/actions/user.actions';


const Login = ({ classes }) => {
    const dispatch = useDispatch();
    const { loading, user, error } = useSelector(state => state.userLogin);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleChange = e => {
        if (e.target.id === 'login_email') {
            setEmail(e.target.value);
        } else if (e.target.id === 'login_password') {
            setPassword(e.target.value);
        }
    }

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    return (
        <div className={classes.root}>
            <h1 className={classes.h1}>Sign in your account</h1>
            {error && <p className={classes.error}>{error}</p>}
            <form>
                <FormElement 
                    type="email"
                    id="login_email"
                    label="Email"
                    value={email}
                    handleChange={handleChange}
                /> 

                <FormElement 
                    type="password"
                    id="login_password"
                    label="Password"
                    value={password}
                    handleChange={handleChange}
                /> 
                <p>Not registered? <Link to={routes.REGISTER}>Create your account</Link></p>
                {loading ? (
                    <Skeleton variant="rect" width={'100%'} height={50} />
                ) : (
                    <button type="submit" onClick={loginSubmit} className={classes.submitButton}>Login</button>
                )}
                
            </form>
        </div>
    )
}

export default withStyles(styles)(Login);
