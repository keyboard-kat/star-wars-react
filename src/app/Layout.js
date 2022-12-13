import * as React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Grid,
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  AppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import clsx from "clsx";

import { useStyles } from "../styles";

export default function Layout() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const styles = useStyles();

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box className={styles.layout}>
      <CssBaseline />
      <Drawer
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "100vw" },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Box className={clsx(styles.drawerHeader)}>
          <IconButton onClick={handleDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Grid container justifyContent="center" pt={6}>
          <Grid item xs={10}>
            <List>
              {[
                {
                  name: "Characters",
                  path: "/",
                },
                {
                  name: "Favorites",
                  path: "/favorites",
                },
              ].map((item) => {
                return (
                  <ListItem
                    key={item.name}
                    sx={{
                      px: 3,
                      py: 2,
                    }}
                  >
                    <Link className={styles.link} to={item.path} onClick={handleDrawer}>
                      <ListItemText primary={item.name} />
                    </Link>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </Drawer>
      <AppBar
        className={clsx(styles.appBar, {
          [styles.appBarShift]: open,
        })}
        position="fixed"
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{ mr: 0, ...(open && { display: "none" }), ml: 0 }}
          >
            <MenuIcon />
          </IconButton>
          <Box className={styles.header}>
            <Typography variant="h5" noWrap component="div">
              {location.pathname.includes("favorites") ? "Favorites" : "Characters"}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <main
        open={open}
        className={clsx(styles.main, {
          [styles.mainOpen]: open,
        })}
      >
        <Grid container justifyContent="center">
          <Grid item xs={12} md={10}>
            <Outlet />
          </Grid>
        </Grid>
      </main>
    </Box>
  );
}
