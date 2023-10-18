import React, { Component } from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

function Footer() {
  return (
    <AppBar position="static" color="primary" className="footer-styles">
      <Container>
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © {new Date().getFullYear()} Your Website Name
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
