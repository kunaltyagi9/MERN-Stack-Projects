import { Box, makeStyles } from '@material-ui/core';
import NavBar from './Home/NarBar';
import Banner from './Home/Banner';
import MidSlide from './Home/MidSlide';
import MidSection from './Home/MidSection';
import Slide from './Home/Slide';
import { furnitureData } from '../constant/data';
import React,  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts } from '../redux/actions/productActions';

const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2'
    }
})

const Home = () => {
    const classes = useStyle();

    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(listProducts())
        console.log(listProducts());
    }, [dispatch])

    return (
        <>
            <NavBar />
            <Box className={classes.component}>
                <Banner />
                <MidSlide />
                <MidSection />
                <Slide
                    data={furnitureData} 
                    title='Furniture Bestsellers'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={furnitureData} 
                    title='Suggested For You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={furnitureData} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={furnitureData} 
                    title='Furniture Bestsellers'
                    timer={false} 
                    multi={true} 
                />
            </Box>
        </>
    )
}

export default Home;