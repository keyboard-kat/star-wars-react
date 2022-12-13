import * as React from "react";
import { List } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCharacters } from "./slices/charactersSlice";
import Person from "./Person";

export default function Characters() {
  const characters = useSelector(selectCharacters);

  React.useEffect(() => {
    console.log("Characters", characters);
  }, [characters]);

  return (
    <List>
      {characters.map((i) => (
        <Person key={i.id} person={i} />
      ))}
    </List>
  );
}
