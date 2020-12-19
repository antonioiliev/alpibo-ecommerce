import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import routes from '../../constants/routes.json';
import HeaderMenu from './menu/menu';
import styles from './header.styles';
import HeaderCart from './cart/cart.header';

const Header = props => {
  const { classes } = props;

  return (
    <React.Fragment>
      <AppBar position="fixed" elevation={2} className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Link
            className={classes.title}
            to={routes.HOME}
            alt="Homepage"
          >
            <img loading="lazy" className={classes.logo} src={process.env.PUBLIC_URL + '/logo.svg'} alt="MYChocolatier logo" />
          </Link>
          <HeaderMenu />
          <HeaderCart />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}


export default withStyles(styles)(Header);
