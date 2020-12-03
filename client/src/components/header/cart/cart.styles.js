const styles = (theme) => ({
    root: {

    },
    cartDrawer: {
        '& .MuiDrawer-paper': {
            width: '40%',
            maxWidth: '900px',
            [theme.breakpoints.down('sm')]: {
                width: '70%'
            },
            [theme.breakpoints.down('xs')]: {
                width: '100%'
            }
        }
    },
    subTotal: {
        fontSize: '18px',
        fontWeight: 700,
        margin: '20px auto'
    },
    buttonsWrapper: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center'
    },
    reviewCartButton: {
        flex: 1,
        background: '#fff',
        border: `1px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
        textDecoration: 'none',
        textAlign: 'center',
        margin: '10px',
        padding: '10px 20px',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    },
    checkoutButton: {
        flex: 1,
        background: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
        color: '#fff',
        textDecoration: 'none',
        textAlign: 'center',
        margin: '10px',
        padding: '10px 20px',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    }
});

export default styles;