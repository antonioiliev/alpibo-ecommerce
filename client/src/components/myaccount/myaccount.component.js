import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';
import { withStyles } from '@material-ui/core/styles';
import styles from './myaccount.styles';
import FormElement from './form.element';
import routes from '../../constants/routes.json';
import { getUserProfile, updateUserProfile } from '../../redux/actions/user.actions';

const MyAccountComponent = ({ classes, history }) => {
    const dispatch = useDispatch();
    const { loading, error, user } = useSelector(state => state.userDetails);
    const { userLogin } = useSelector(state => state);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const updateDetailsSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserProfile({ id: userLogin.user.id, name, email, password }));
    }

    React.useEffect(() => {
        if (!userLogin.user) {
            history.push(routes.LOGIN);
        } else {
            if (!user.name) {
                dispatch(getUserProfile());
            } else {
                setName(user.name);
                setEmail(user.email);
            }
        }
    }, [history, dispatch, user, userLogin.user]);

    return (
        <div className={classes.root}>
            <h1 className={classes.h1}>My Account</h1>
            {error && <p className={classes.error}>{error}</p>}
            <form>
                <FormElement 
                    type="text"
                    label="Name"
                    value={name}
                    handleChange={(e) => setName(e.target.value)}
                /> 

                <FormElement 
                    type="email"
                    label="Email"
                    value={email}
                    handleChange={(e) => setEmail(e.target.value)}
                /> 

                <FormElement 
                    type="password"
                    label="Password"
                    value={password}
                    handleChange={(e) => setPassword(e.target.value)}
                /> 

                {loading ? (
                    <Skeleton variant="rect" width={'100%'} height={50} />
                ) : (
                    <button type="submit" onClick={updateDetailsSubmit} className={classes.submitButton}>Update</button>
                )}
                
            </form>
        </div>
    )
}

export default withStyles(styles)(MyAccountComponent);
