import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

import { getAllPosts } from '../../../service/api';

//components
import Post from './Post';

const Posts = () => {
    const [posts, getPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchData = async () => { 
            let data = await getAllPosts(search);
            getPosts(data);
        }
        fetchData();
    }, []);

    return (
        <>
            {
                posts.length && posts.map(post => (
                    <Grid item lg={3} sm={4} xs={12}>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`details/${post._id}`}>
                            <Post post={post} />
                        </Link>
                    </Grid>
                ))
            }
        </>
    )
}

export default Posts;