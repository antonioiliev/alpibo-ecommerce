const styles = (theme) => ({
    center: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    right: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    rightLink: {
        fontSize: 16,
        color: theme.palette.primary.dark,
        marginLeft: theme.spacing(3),
    },
    link: {
        color: theme.palette.primary.dark,
        background: 'none',
        border: 'none',
        padding: '10px 20px',
        fontSize: '20px',
        transition: 'all 0.5s ease-out',
        borderBottom: `3px solid transparent`,
        textDecoration: 'none',
        '&:hover': {
            borderBottom: `3px solid ${theme.palette.secondary.main}`,
            textDecoration: 'none',
            cursor: 'pointer'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '16px',
        },
        [theme.breakpoints.down('md')]: {
            margin: '0px',
        }
    },
    linkSecondary: {
        border: `1px solid ${theme.palette.primary.dark}`,
        color: theme.palette.primary.dark,
        padding: '5px 15px',
        borderRadius: 5
    },
    loggedAvatar: {
        cursor: 'pointer', 
        background: theme.palette.primary.light,
        border: `1px solid ${theme.palette.primary.light}`,
        color: theme.palette.primary.dark
    },
    menuButton: {
        color: theme.palette.primary.dark
    },
    drawer: {
        '& .MuiDrawer-paper': {
            width: '80%'
        }
    }
});

export default styles;