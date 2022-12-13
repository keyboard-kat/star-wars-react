import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./app/Layout";
import Characters from "./app/Characters";
import Favorites from "./app/Favorites";
import { useSelector, useDispatch } from "react-redux";
import { setCharacters, selectCharacters } from "./app/slices/charactersSlice";
import * as API from "./app/api";

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    (async () => {
      let characters = await API.fetchPeople();
      dispatch(setCharacters(characters));
    })();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Characters />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}
