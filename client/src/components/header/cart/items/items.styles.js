const styles = (theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        padding: '20px'
    },
    productImage: {
        width: 100,
        height: 100,
        objectFit: 'cover'
    },
    productData: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        textAlign: 'left',
        height: '100%'
    },
    productName: {
        fontSize: '16px',
        margin: 0,
        padding: '0px 10px'
    },
    productPrice: {
        fontSize: '16px',
        padding: '0px 10px'
    }
});

export default styles;