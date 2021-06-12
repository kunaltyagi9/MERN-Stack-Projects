
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

//components
import Post from './Post';

const Posts = () => {
    const count = [1,2,3,4,5,6,7,8,9];
    return (
        <>
            {
                count.map(post => (
                    <Grid item lg={3} sm={4} xs={12}>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to='details'>
                            <Post />
                        </Link>
                    </Grid>
                ))
            }
        </>
    )
}

export default Posts;