
//components
import Product from './Product';

import { products } from '../../constants/products';

const Products = () => {
    return (
        products.map(product => (
            <Product product={product} />
        ))
    )
}

export default Products;