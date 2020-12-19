import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './form.element.styles';

const FormElement = ({ classes, type, id, label, value, handleChange }) => {
    return (
        <div className={classes.root}>
            <label htmlFor={id}>{label}</label>
            <input type={type} onChange={handleChange} value={value} id={id} />
        </div>
    )
}

export default withStyles(styles)(FormElement);
