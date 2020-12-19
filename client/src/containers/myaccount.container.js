import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import styles from './styles/myaccount.styles';
import MyAccountComponent from '../components/myaccount/myaccount.component';
import Login from '../components/myaccount/login/login.component';
import Register from '../components/myaccount/register/register.component';
import routes from '../constants/routes.json';

const MyAccount = ({ classes, match, history }) => {
    const { user } = useSelector(state => state.userLogin);

    const [loggedIn, setLoggedIn] = React.useState(false);

    React.useEffect(() => {
        if (user && user.email) {
            // TODO perform JWT token verification
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
            if (match.path === routes.MY_ACCOUNT && match.isExact) {
                history.push(routes.LOGIN);
            }
        }
    }, [user, history.location.pathname]);

    return (
        loggedIn ? (
            <Route path={routes.MY_ACCOUNT} component={MyAccountComponent} />
        ) : (
            <React.Fragment>
                <Route path={routes.LOGIN} component={Login} />
                <Route path={routes.REGISTER} component={Register} />
            </React.Fragment>
        )
    );
};

export default withStyles(styles)(MyAccount);
