
import { Box } from '@mui/material';
import { products } from '../../constants/productConstant';

import Product from './Product';

const Products = () => {
    return (
        <>
            <Box style={{display:'flex'}}>
                <Product data={products.watch} />
                <Product data={products.ipad} />
            </Box>
            <Box style={{display:'flex'}}>
                <Product data={products.airprods} />
                <Product data={products.homepod} />
            </Box>
            <Box style={{display:'flex'}}>
                <Product data={products.arcade} />
                <Product data={products.finch} />
            </Box>
        </>
    )
}

export default Products;