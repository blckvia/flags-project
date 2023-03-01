import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  region: '',
};

const conrtolsSlice = createSlice({
  name: '@@controls',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    serRegion: (state, action) => {
      state.search = action.payload;
    },
    clearControls: (state, action) => initialState,
  },
});

export const { setSearch, setRegion, clearControls } = conrtolsSlice.actions;
export const controlsReducer = conrtolsSlice.reducer;

export const selectSearch = (state) => state.controls.search;
export const selectRegion = (state) => state.controls.region;
export const selectControls = (state) => state.controls;
