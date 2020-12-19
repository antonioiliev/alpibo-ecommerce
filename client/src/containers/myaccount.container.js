import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import styles from './styles/myaccount.styles';
import Login from '../components/myaccount/login/login.component';

const MyAccount = ({ classes }) => {
    const { user } = useSelector(state => state.userLogin);

    const [loggedIn, setLoggedIn] = React.useState(false);

    React.useEffect(() => {
        if (user.email) {
            // TODO perform JWT token verification
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, [user]);

    return (
        loggedIn ? (
        <div>
            <h2 className={classes.h2}>My account</h2>
        </div>
        ) : (
            <Login />
        )
    );
};

export default withStyles(styles)(MyAccount);
