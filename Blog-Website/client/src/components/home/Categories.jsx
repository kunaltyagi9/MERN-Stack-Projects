
import { Button, Table, TableHead, TableRow, TableCell, TableBody, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    table: {
        border: '1px solid rgba(224, 224, 224, 1)'
    },
    write: {
        margin: 20,
        width: '85%',
        background: '#6495ED',
        color: '#fff',
        textDecoration: 'none'
    }
})

const Categories = () => {
    const classes = useStyle();
    return (
        <>
            <Link to='/create' style={{ textDecoration: 'none' }}>
                <Button variant="contained" className={classes.write}>Create Blog</Button>
            </Link>
            
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Categories</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Life</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Music</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Style</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Sport</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Tech</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}

export default Categories;