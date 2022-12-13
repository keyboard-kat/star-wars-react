import { makeStyles } from "@mui/styles";
const primary = { background: "#17141F", color: "#ffff" };

export const useStyles = makeStyles((theme) => ({
  layout: {
    display: "flex",
    ...primary,
  },
  appBar: {
    ...primary,
    padding: theme.spacing(1, 0),
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: "100%",
    marginLeft: "-100%",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  main: {
    flexGrow: 1,
    padding: theme.spacing(2),
    marginTop: "64px",
    background: "#17141F",
    height: "100%",
    color: "#fff",
    transition: {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    },
  },
  mainOpen: {
    transition: {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    },
    marginLeft: 0,
  },
  drawerHeader: {
    ...primary,
    alignItems: "center",
    padding: theme.spacing(1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  hide: {
    display: "none",
  },
  header: {
    display: "flex",
    margin: "auto",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },

  checked: {
    color: "#A2D1B1",
  },
  text: {
    color: "#fff",
    padding: theme.spacing(1, 0),
    fontWeight: "200",
  },

  place: { color: "#fff" },
}));
