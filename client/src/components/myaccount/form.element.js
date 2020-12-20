import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './form.element.styles';

const FormElement = ({ classes, type, id, label, value, handleChange, required }) => {
    return (
        <div className={classes.root}>
            <label htmlFor={id}>
                {label}
                {required && <abbr class="required" title="required">*</abbr>}
            </label>
            <input type={type} onChange={handleChange} required={required} value={value} id={id} />
        </div>
    )
}

export default withStyles(styles)(FormElement);
