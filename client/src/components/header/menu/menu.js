import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './menu.styles';
import items from './menu.items';

const HeaderMenu = props => {
    const { classes } = props;
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
  
    const toggleDrawer = open => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawerOpen(open);
    };

    React.useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenWidth(window.innerWidth);
            console.log('inner width', window.innerWidth);
        });
    }, []);

    return (
        <React.Fragment>
            {screenWidth >= 960 ? (
                <React.Fragment>
                    <div className={classes.center}>
                        {items.map((value, index) => {
                            return <Link key={`menu-link-${index}`} className={classes.link} href={value.href}>{value.title}</Link>
                        })}
                        
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
