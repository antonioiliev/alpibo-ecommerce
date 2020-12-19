const styles = (theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 900,
        margin: 'auto',

        '& form': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '500px'
        },
        [theme.breakpoints.down('sm')]: {
            padding: 20
        }
    },
    error: {
        background: '#ff0000',
        color: '#fff',
        fontWeight: 700,
        margin: 0,
        width: '100%',
        maxWidth: '500px',
        padding: '10px',
    },
    h1: {
        textAlign: 'center',
        fontSize: '42px',
        textTransform: 'uppercase',
        fontWeight: 300
    },
    submitButton: {
        width: '100%',
        maxWidth: '500px',
        background: theme.palette.primary.main,
        border: `2px solid ${theme.palette.primary.main}`,
        color: '#fff',
        padding: '10px',
        fontSize: 18,
        // textTransform: 'uppercase',
        transition: 'all 0.3s',

        '&:hover': {
            background: '#fff',
            color: theme.palette.primary.main,
            cursor: 'pointer'
        }
    }
  });

  export default styles;
  