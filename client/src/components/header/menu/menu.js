import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './menu.styles';
import items from './menu.items';
import routes from '../../../constants/routes.json';
import { logout as logoutAction } from '../../../redux/actions/user.actions';

const HeaderMenu = props => {
    const { classes } = props;
    const  { user } = useSelector(state => state.userLogin);
    const dispatch = useDispatch();
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const openSubmenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const closeSubMenu = () => {
      setAnchorEl(null);
    };
  
    const toggleDrawer = open => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawerOpen(open);
    };

    const logout = () => {
        dispatch(logoutAction());
        closeSubMenu();
    }

    React.useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenWidth(window.innerWidth);
        });
    }, []);

    return (
        <React.Fragment>
            {screenWidth >= 960 ? (
                <React.Fragment>
                    <div className={classes.center}>
                        {items.map((value, index) => {
                            return <Link key={`menu-link-${index}`} className={classes.link} to={value.href}>{value.title}</Link>
                        })}
                        {user.name !== undefined ? (
                            <React.Fragment>
                                <button onClick={openSubmenu} className={classes.link}>Hi, {user.name}</button>
                                <Menu
                                    anchorEl={anchorEl}
                                    keepMounted
                                    getContentAnchorEl={null}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}}
                                    transformOrigin={{ vertical: 'center', horizontal: 'center'}}
                                    open={Boolean(anchorEl)}
                                    onClose={closeSubMenu}
                                >
                                    <MenuItem onClick={closeSubMenu}>Profile</MenuItem>
                                    <MenuItem onClick={logout}>Logout</MenuItem>
                                </Menu>
                            </React.Fragment>
                        ) : (
                            <Link className={classes.link} to={routes.MY_ACCOUNT}>My Account</Link>
                        )}
                    </div>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <IconButton 
                        edge="start" 
                        className={classes.menuButton} 
                        color="inherit" 
                        onClick={toggleDrawer(true)}
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor='right'
                        open={drawerOpen}
                        className={classes.drawer}
                        width="100%"
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                    >
                        {items.map((value, index) => {
                            return <Link key={`menu-link-${index}`} className={classes.link} href={value.href} onClick={toggleDrawer(false)}>{value.title}</Link>
                        })}
                    </Drawer>
                </React.Fragment>
            )}
        </React.Fragment>
    );
}

export default withStyles(styles)(HeaderMenu);
