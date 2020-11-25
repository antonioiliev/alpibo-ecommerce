import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import styles from './products.styles';
import Product from './product.single';

const Products = ({ classes }) => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        const queryProducts = async () => {
            const { data } = await axios.get('/api/products');
            console.log('server returned', data);
            setProducts(data);
        };

        queryProducts();
    }, []);

    return (
        <div className={classes.root}>
            {products.map((product) => {
                return <Product product={product} />
            })}
        </div>
    )
}

export default withStyles(styles)(Products);
