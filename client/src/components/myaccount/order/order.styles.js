import { pink } from "@material-ui/core/colors";

const styles = (theme) => ({
    root: {
        paddingTop: 50,
        maxWidth: 900,
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',

        '& h2': {
            fontSize: 32,
            fontWeight: 300,
            textTransform: 'uppercase'
        },
        '& h3': {
            fontSize: '22px',
            margin: '20px 0px 0px 0px',
            fontWeight: 500,
            textTransform: 'uppercase'
        }
    },
    paid: {
        color: '#00ff00',
        fontWeight: 700
    },
    unpaid: {
        color: '#ff0000',
        fontWeight: 700
    },
    contentDiv: {
        display: 'flex',
        flexDirection: 'column'
    },
    orderInfoDiv: {
        display: 'flex',
        flexDirection: 'row wrap',
        '& > div': {
            flex: 1
        }
    },
    orderItem: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',

        '& img': {
            maxWidth: 30,
            objectFit: 'contain',
            borderRadius: 5,
            marginRight: 10
        },
        '& p': {
            marginLeft: 10
        }
    },
    error: {
        background: '#ff0000',
        color: '#fff',
        padding: 10,
        borderRadius: 5
    },
    table: {
        maxWidth: 500,
        '& td': {
            padding: '10px 0px',
            borderBottom: '1px solid #333'
        }
    }
});

export default styles;