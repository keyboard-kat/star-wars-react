import * as React from "react";
import { List, TextField, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectFavorites } from "./slices/charactersSlice";
import Person from "./Person";

export default function Favorites() {
  const favorites = useSelector(selectFavorites);
  const [searchResults, setSearchResults] = React.useState(null);

  React.useEffect(() => {
    console.log("favorites", favorites);
    console.log("searchResults", searchResults);
  }, [favorites, searchResults]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          pb: 6,
          mt: "72px",
        }}
      >
        <Box pb={2}>
          <Typography>Search a favorite</Typography>
        </Box>
        <TextField
          pb={2}
          variant="outlined"
          fullWidth
          onChange={(e) => {
            if (e.target.value.length > 0) {
              setSearchResults(
                favorites.filter((obj) =>
                  Object.values(obj).some((val) =>
                    val ? val.toString().toLowerCase().includes(e.target.value.toLowerCase()) : null
                  )
                )
              );
            } else {
              setSearchResults(null);
            }
          }}
        />
      </Box>
      <List>
        {!searchResults
          ? favorites.map((i) => <Person key={i.url} person={i} />)
          : searchResults.map((i) => <Person key={i.url} person={i} />)}
      </List>
    </>
  );
}
