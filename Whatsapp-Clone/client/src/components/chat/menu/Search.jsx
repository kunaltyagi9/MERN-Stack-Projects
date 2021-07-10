import { useState } from 'react';
import { Box, InputBase, makeStyles } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    component: {
        background: '#F6F6F6',
        height: 43,
        display: 'flex',
        alignItems: 'center',
        transition: 'box-shadow .18s ease-out,background-color .25s ease-out'
    },
    search: {
        position: 'relative',
        borderRadius: 18,
        backgroundColor: '#FFFFFF',
        margin: '0 13px',
        width: '100%'
      },
      searchIcon: {
        color: '#919191',
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center'
      },
      inputRoot: {
        width: '100%'
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: 65,
        fontSize: 14,
        height: 15,
        width: '100%'
    }
}));

const Search = ({ setText }) => {
    const classes = useStyles();

    return (
        <Box className={classes.component}>
        <Box className={classes.search}>
            <Box className={classes.searchIcon}>
              <SearchIcon fontSize="small"/>
            </Box>
            <InputBase
              placeholder="Search or start new chat"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => setText(e.target.value)}
            />
          </Box>
        </Box>
    )
}

export default Search;