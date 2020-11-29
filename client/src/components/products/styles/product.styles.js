const styles = (theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        minWidth: '200px',
        maxWidth: '300px',
        padding: '0px 30px',
        [theme.breakpoints.down('md')]: {
            margin: '20px 0px'
        }
    },
    image: {
        width: '100%',
        maxWidth: '100%',
        height: '300px',
        objectFit: 'cover',
        borderRadius: 5,
        boxShadow: '0px 0px 3px rgba(0,0,0,0.5)'
    },
    title: {
        color: '#333',
        textDecoration: 'none',
        margin: '10px 0px'
    }
  });

  export default styles;
  