const styles = (theme) => ({
    loadersWrapper: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-evenly',
        width: '100%',
        '& > div': {
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                padding: '20px'
            }
        }
    },
    skeleton: {
        margin: '5px 0px'
    },
    imageLoader: {
        width: 280,
        height: 300,
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        }
    },
    titleLoader: {
        width: 280,
        height: 20
    },
    ratingsLoader: {
        marginTop: 10,
        width: 200,
        height: 20
    },
    priceLoader: {
        marginTop: 10,
        width: 100,
        height: 20
    }
});

export default styles;