import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const NavMenu = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" >
          Doot Doot, MF
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavMenu;
