
//components
import Header from './Header';
import Info from './Info';
import Section from './Section';
import Products from './Products';

import { section } from '../../constants/secConstant';

const Home = () => {
    return (
        <>
            <Header />
            <Info />
            <Section data={section.iphone13Pro} />
            <Section data={section.iphone13} />
            <Section data={section.macbookpro} />
            <Products />
        </>
    )
}

export default Home;