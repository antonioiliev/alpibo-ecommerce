import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Star, StarBorder, StarHalf } from '@material-ui/icons';
import styles from './rating.styles';

const Rating = ({ classes, rating, numReviews }) => {

    return (
        <div className={classes.root}>
            {rating >= 1 ? <Star className={classes.star} /> : rating >= 0.5 ? <StarHalf className={classes.star} /> : <StarBorder className={classes.star} />}
            {rating >= 2 ? <Star className={classes.star} /> : rating >= 1.5 ? <StarHalf className={classes.star} /> : <StarBorder className={classes.star} />}
            {rating >= 3 ? <Star className={classes.star} /> : rating >= 2.5 ? <StarHalf className={classes.star} /> : <StarBorder className={classes.star} />}
            {rating >= 4 ? <Star className={classes.star} /> : rating >= 3.5 ? <StarHalf className={classes.star} /> : <StarBorder className={classes.star} />}
            {rating >= 5 ? <Star className={classes.star} /> : rating >= 4.5 ? <StarHalf className={classes.star} /> : <StarBorder className={classes.star} />}
            <span className={classes.reviewsText}>({numReviews}) reviews</span>
        </div>
    )
}

export default withStyles(styles)(Rating);
