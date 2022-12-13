import * as React from "react";
import { Box, Divider, Checkbox, ListItem, ListItemText, Chip } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";

import { useStyles } from "../styles";
import { setFavorite, removeFavorite } from "./slices/charactersSlice";
const theme = createTheme({
  components: {
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: "#463B5E" },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: { paddingLeft: 8, paddingRight: 8, paddingTop: 16, paddingBottom: 16 },
      },
    },
    MuiListItemText: {
      "& .MuiTypography-body1": {
        fontWeight: "600",
        color: "#fff",
      },
    },
    MuiListItemSecondaryAction: {
      styleOverrides: {
        root: {
          top: 40,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#ffff",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          color: "#ffff",
          padding: "4px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "6px",
          flex: "none",
          flexGrow: "0",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#ffff",
        },
      },
    },
  },
});

export default function Person({ person }) {
  const styles = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {}, [person.favorite]);

  return (
    <React.Fragment key={person.url}>
      <ThemeProvider theme={theme}>
        <ListItem
          secondaryAction={
            <Checkbox
              onClick={(e) => {
                !person.favorite
                  ? dispatch(setFavorite({ ...person }))
                  : dispatch(removeFavorite({ ...person }));
              }}
              icon={!person.favorite ? <FavoriteBorder /> : <Favorite className={styles.checked} />}
              checkedIcon={<Favorite className={styles.checked} />}
            />
          }
        >
          <Box pb={1}>
            <ListItemText
              primary={
                <Box color="#fff" fontWeight="600">
                  {person.name}
                </Box>
              }
            />
            <Box color="#fff" fontWeight="300" pb={1}>
              {person.gender + " | " + person.birth_year}
            </Box>
            <Chip
              className={styles.chip}
              icon={<PlaceOutlinedIcon style={{ color: "#fff", fontSize: "1.3em" }} />}
              label={person.homeworld}
            />
          </Box>
        </ListItem>
        <Divider />
      </ThemeProvider>
    </React.Fragment>
  );
}
