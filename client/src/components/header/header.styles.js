const styles = (theme) => ({
    appbar: {
      background: theme.palette.primary.light,
      [theme.breakpoints.up('md')]: {
        padding: '0px 70px'
      }
    },
    title: {
      fontSize: 24,
      textTransform: 'uppercase',
      fontWeight: 300,
      marginLeft: '20px',
      color: theme.palette.primary.dark,
      display: 'flex'
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-evenly',
      width: '100%',
      maxWidth: '2000px',
      margin: 'auto',
      padding: '0px 50px',
      [theme.breakpoints.down('lg')]: {
        padding: '0px 50px',
      },
      [theme.breakpoints.down('md')]: {
        justifyContent: 'flex-end',
        padding: '0px 0px'
      },
      [theme.breakpoints.down('sm')]: {
        padding: '0px 20px'
      }
    },
    logo: {
      maxWidth: '120px',
      [theme.breakpoints.down('md')]: {
        maxWidth: '80px'
      }
    }
  });

  export default styles;
  