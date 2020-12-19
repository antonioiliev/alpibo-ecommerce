const styles = (theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        width: '90%',
        maxWidth: '2100px',
        margin: 'auto',
        paddingTop: '50px'
    },
    leftCol: {
        flexBasis: '50%',
        textAlign: 'center'
    },
    rightCol: {
        flexBasis: '50%'
    },
    h1: {
        marginTop: '0px'
    },
    nameLoader: {
        width: '100%',
        height: 40
    },
    productImage: {
        width: '100%',
        maxWidth: '500px',
        maxHeight: '500px',
        objectFit: 'cover',
        objectPosition: '0 100%'
    },
    imageLoader: {
        width: '90%',
        height: 300
    },
    qtyInput: {
        width: '60px',
        padding: '10px 10px',
        fontSize: '18px',
        border: `1px solid ${theme.palette.primary.main}`,
        borderRight: 'none'
    },
    addToCartButton: {
        padding: '10px',
        width: '250px',
        maxWidth: '100%',
        background: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
        fontSize: '18px',
        // textTransform: 'uppercase',
        fontWeight: 100,
        color: '#fff',
        transition: 'all 0.3s',
        '&:hover': {
            background: '#fff',
            color: theme.palette.primary.main,
            cursor: 'pointer'
        }
    },
    outOfStockP: {
        color: '#ff0000'
    },
    descriptionLoader: {
        width: '90%',
        height: 300,
        margin: '10px 0px'
    },
    priceLoader: {
        width: 50,
        height: 20
    }
});

export default styles;