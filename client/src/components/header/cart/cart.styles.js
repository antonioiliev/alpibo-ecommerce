const styles = (theme) => ({
    root: {

    },
    cartDrawer: {
        '& .MuiDrawer-paper': {
            width: '40%',
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
    reviewCartButton: {
        background: theme.palette.primary.main,
        color: '#fff',
        textDecoration: 'none',
        textAlign: 'center',
        width: '100%',
        maxWidth: '260px',
        margin: '0px auto',
        padding: '10px 20px'
    }
});

export default styles;