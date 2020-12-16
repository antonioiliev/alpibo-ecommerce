const styles = (theme) => ({
  table: {
    width: '100%',
    maxWidth: '1100px',
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
    '& > tbody > tr': {
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column'
      }
    },
    '& input': {
      width: '40px',
      padding: '10px'
    }
  },
  productImage: {
    width: 80,
    height: 80,
    objectFit: 'cover',
    borderRadius: '50%'
  },
  itemDeleteButton: {
    color: '#ff0000',
    border: '1px solid #ff0000',
    borderRadius: '50%',
    fontSize: 18
  }
  });

  export default styles;
  