const styles = (theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        margin: '10px 0px',

        '& label abbr': {
            marginLeft: 5,
            textDecoration: 'none',
            color: '#ff0000'
        },

        '& input': {
            margin: '10px 20px 0px 0px',
            padding: 10,
            fontSize: 16,
            [theme.breakpoints.down('sm')]: {
                margin: '10px 0px 0px 0px'
            }
        }
    }
  });

  export default styles;
  