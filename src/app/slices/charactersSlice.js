import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    data: [],
    favorites: [],
  },
  reducers: {
    setCharacters: (state, action) => {
      state.data = action.payload.map((i) => {
        return {
          ...i,
          favorite: false,
        };
      });
    },
    removeFavorite: (state, action) => {
      state.data = state.data.map((i) =>
        i.id === action.payload.id ? { ...i, favorite: false } : { ...i }
      );
      state.favorites = state.data.filter((i) => i.favorite === true);
    },
    setFavorite: (state, action) => {
      state.data = state.data.map((i) =>
        i.id === action.payload.id ? { ...i, favorite: true } : { ...i }
      );
      state.favorites = state.data.filter((i) => i.favorite === true);
    },
  },
});

export const { setCharacters, setFavorite, removeFavorite } = charactersSlice.actions;
export const selectCharacters = (state) => state.characters.data;
export const selectFavorites = (state) => state.characters.favorites;

export default charactersSlice.reducer;
