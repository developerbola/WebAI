import * as React from "react";
import PropTypes from "prop-types";
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
import "./nav.css";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Home", "Services", "Solution", "About"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
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
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: "20px",
              mr: "20px",
            }}
          >
            {navItems.map((item) => (
              <Link to={item == "Home" ? "/" : item}>
                <Button
                  key={item}
                  sx={{
                    color: "#fff",
                    fontFamily: "Inria Sans, sans-serif",
                    fontSize: "20px",
                  }}
                >
                  {item}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
