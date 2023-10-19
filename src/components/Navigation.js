import {
  AppBar,
  Avatar,
  Box,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  colors,
} from "@mui/material";
import React, { useContext } from "react";
import { Button, Container, Navbar, NavItem } from "react-materialize";
import { Link } from "react-router-dom";
import { Margin, NavigateBeforeOutlined } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/img/logo-film.png";
import { ThemeContext } from "./ThemeContext";
import Toggle from "./Toggle";

// import DrawerMUI from "./DrawerMUI";

function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const linkStyle = {
    color: "white", // Customize the color for the links
    textDecoration: "none", // Remove underline
    margin: "0 10px", // Add some spacing between links
  };

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          padding: "0 20px",
          backgroundColor: {
            color: theme.color,
            backgroundColor: theme.backgroundColor,
          },
        }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} className="nav-logo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <ul className="navigation-ul-menu">
                <li>
                  <a style={linkStyle} href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a style={linkStyle} href="#">
                    Film
                  </a>
                </li>
                <li>
                  <a style={linkStyle} href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} className="nav-logo" />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <ul className="navigation-ul">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Film</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </Box>
          <div style={{ position: "relative" }}>
            <a
              className="switch-mode"
              href="#"
              onClick={toggle}
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
                outline: "none",
              }}
              data-testid="toggle-theme-btn"
            >
              <Toggle></Toggle>
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navigation;
