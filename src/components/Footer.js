import React, { Component } from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

function Footer() {
  return (
    <div className="footer-styles">
      <AppBar
        position="static"
        className="footer-styles"
        sx={{ backgroundColor: "#3D3D3D" }}
      >
        <Container>
          <Toolbar>
            <Typography variant="body1" color="inherit">
              © {new Date().getFullYear()} YuuMee Film
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Footer;
