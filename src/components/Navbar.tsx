import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box display="flex" justifyContent="center" alignItems="center" width={1} py={2}>
          
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
