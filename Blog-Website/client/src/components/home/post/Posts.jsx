import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { getAllPosts } from '../../../service/api';

//components
import Post from './Post';

const Posts = () => {
    const [posts, getPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {   
            let data = await getAllPosts();
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