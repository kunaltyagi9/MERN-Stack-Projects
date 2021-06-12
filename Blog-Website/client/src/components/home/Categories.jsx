
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    table: {
        border: '1px solid rgba(224, 224, 224, 1)'
    }
})

const Categories = () => {
    const classes = useStyle();
    return (
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
    )
}

export default Categories;