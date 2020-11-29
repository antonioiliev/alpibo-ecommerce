import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Products from '../components/products/products';
import styles from './styles/homepage.styles';

const HomePage = ({ classes }) => {
    return (
        <div>
            <h2 className={classes.h2}>Healthy is tasty!</h2>
            <Products />
        </div>
    )
}

export default withStyles(styles)(HomePage);
