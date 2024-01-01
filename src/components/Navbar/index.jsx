import * as React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../public/favicon.png";
import "./nav.css";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const navItems = ["home", "services", "blogs", "about"];

function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h4"
        sx={{
          display: "grid",
          placeItems: "center",
          fontFamily: "Ubuntu, sans-serif",
          fontWeight: "400",
          py: "20px",
        }}
      >
        WebAI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item,idx) => (
          <NavLink
            to={item == "home" ? "/" : item}
            style={{ textDecoration: "none" }}
            key={idx}
          >
            <ListItem key={item} disablePadding sx={{ borderRadius: "10px" }}>
              <ListItemButton
                sx={{
                  textAlign: "center",
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", bgcolor: "transparent", zIndex: "1" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ p: "10px", bgcolor: "transparent", backdropFilter: "blur(10px)" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mx: { sm: "0", xl: "70px" },
            my: { sm: "0", xl: "7px" },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, fontSize: "40px" }}
          >
            <MenuIcon sx={{ fontSize: "35px" }} />
          </IconButton>
          <Box sx={{ display: { sm: "none" }, ml: "55%" }}>
            <img src={logo} alt="logo" height="50px" />
          </Box>
          <Link to={"/"} style={{ color: "white" }}>
            <Typography
              variant="h4"
              sx={{
                display: { xs: "none", sm: "grid" },
                placeItems: "center",
                fontFamily: "Ubuntu, sans-serif",
                fontWeight: "400",
              }}
            >
              WebAI
            </Typography>
          </Link>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: "20px",
              mr: "20px",
            }}
          >
            {navItems.map((item,idx) => (
              <NavLink key={idx} to={item == "Home" ? "/" : item}>
                <Button
                  sx={{
                    color: "#fff",
                    fontFamily: "Inria Sans, sans-serif",
                    fontSize: "20px",
                    px: "10px",
                  }}
                >
                  {item}
                </Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            backdropFilter: "blur(10px)",
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "#ffffff10",
              backdropFilter: "filter(10px)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
