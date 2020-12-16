const styles = (theme) => ({
  table: {
    margin: 'auto',
    '& th': {
      minWidth: 100,
      textAlign: 'left',
      padding: '10px 20px',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    '& td': {
      padding: '0px 20px'
    },
    '& .imageTH': {
      textAlign: 'center'
    },
    '& .imageTD': {
      textAlign: 'center'
    },
    '& tr': {
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column'
      }
    }
  },
  productImage: {
    width: 80,
    height: 80,
    objectFit: 'cover',
    borderRadius: '50%'
  }
  });

  export default styles;
  