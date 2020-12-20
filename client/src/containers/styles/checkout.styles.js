const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
    },
    h1: {
        textAlign: 'center',
        fontWeight: 300,
        textTransform: 'uppercase'
    },
    checkoutFields: {
        maxWidth: 900,
        display: 'flex',
        flexDirection: 'column'
    },
    checkoutFieldsRow: {
        display: 'flex',
        flexFlow: 'row wrap'
    },
    halfRow: {
        flexBasis: '50%',
        [theme.breakpoints.down('sm')]: {
            flexBasis: '100%'
        }
    },

    submitButton: {
        width: '100%',
        maxWidth: '300px',
        background: theme.palette.primary.main,
        border: `2px solid ${theme.palette.primary.main}`,
        color: '#fff',
        padding: '10px',
        fontSize: 18,
        transition: 'all 0.3s',
        margin: 'auto',

        '&:hover': {
            background: '#fff',
            color: theme.palette.primary.main,
            cursor: 'pointer'
        }
    }
  });

  export default styles;
  