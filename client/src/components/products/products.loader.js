import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import styles from './styles/loader.styles';

const ProductsLoader = ({ classes }) => {
    return (
        <div className={classes.loadersWrapper}>
            <div>
                <Skeleton variant="rect" className={[classes.skeleton, classes.imageLoader]} />
                <Skeleton variant="rect" className={[classes.skeleton, classes.titleLoader]} />
                <Skeleton variant="rect" className={[classes.skeleton, classes.ratingsLoader]} />
                <Skeleton variant="rect" className={[classes.skeleton, classes.priceLoader]} />
            </div>
            <div>
                <Skeleton variant="rect" className={[classes.skeleton, classes.imageLoader]} />
                <Skeleton variant="rect" className={[classes.skeleton, classes.titleLoader]} />
                <Skeleton variant="rect" className={[classes.skeleton, classes.ratingsLoader]} />
                <Skeleton variant="rect" className={[classes.skeleton, classes.priceLoader]} />
            </div>
            <div>
                <Skeleton variant="rect" className={[classes.skeleton, classes.imageLoader]} />
                <Skeleton variant="rect" className={[classes.skeleton, classes.titleLoader]} />
                <Skeleton variant="rect" className={[classes.skeleton, classes.ratingsLoader]} />
                <Skeleton variant="rect" className={[classes.skeleton, classes.priceLoader]} />
            </div>
        </div>
    )
}

export default withStyles(styles)(ProductsLoader);
