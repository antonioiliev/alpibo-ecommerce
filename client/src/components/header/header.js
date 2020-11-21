import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import routes from '../../constants/routes.json';
import HeaderMenu from './menu/menu';
import styles from './header.styles';
import IconButton from '@material-ui/core/IconButton';
import { 
  ShoppingBasket as CartIcon,
  AccountCircle as AccountIcon
} from '@material-ui/icons';

const Header = props => {
  const { classes } = props;

  return (
    <React.Fragment>
      <AppBar position="fixed" elevation={2} className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href={routes.HOME}
          >
            <img loading="lazy" className={classes.logo} src={process.env.PUBLIC_URL + '/logo.svg'} alt="MYChocolatier logo" />
          </Link>
          <HeaderMenu />
          <IconButton color="primary">
            <CartIcon style={{ fontSize: 34 }} />
          </IconButton>
          <IconButton color="primary">
            <AccountIcon style={{ fontSize: 34 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}


export default withStyles(styles)(Header);
