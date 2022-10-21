import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import  {toast} from 'react-toastify';
//state
const initialState = {
  albums: [],
};

//thunks
//request example https://www.bezkoder.com/react-fetch-example/;

export const fetchAsyncAlbums = createAsyncThunk(
  "albums/fetchAsyncAlbums",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    console.log(response);
    const data = await response.json();
    return data;
  }
);

export const deleteAsyncAlbum = createAsyncThunk(
  "albums/deleteAsyncAlbum",
  async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${id}`,
      {
        method: "DELETE",
      }
    );
    console.log(response);
  }
);

export const updateAsyncAlbum = createAsyncThunk(
  "albums/updateAsyncAlbum",
  async (data) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          id: data.id,
          title: data.title,
          userId: data.userId,
        }),
      }
    );
    console.log(response);
  }
);

//creating a alubm slice
const albumSlice = createSlice({
  name: "albums",
  initialState,

  //actions
  reducers: {
    deleteAlbum: (state, { payload }) => {
      state.albums = state.albums.filter((album) => album.id != payload);
    },

    updateAlbum: (state, { payload }) => {
      const data = payload.updatedAlbum;
      state.albums.map((album) => {
        if (album.id === data.id) {
          album.title = data.title;
        }
      });
    },
  },

  //thunkk returns a promise
  extraReducers: {
    [fetchAsyncAlbums.fulfilled]: (state, { payload }) => {
      console.log("fulfilled got the albums");

      // toast("Fetched album")

      return { ...state, albums: payload };
    },
    [deleteAsyncAlbum.fulfilled]: () => {

      toast("Deleted");

      console.log("Deleted");
      return;
    },
    [updateAsyncAlbum.fulfilled]: () => {

      toast("Updated");

      console.log("Updated");
      
      return;
    },
  },
});

export const getAllAlbums = (state) => state.albums.albums;

export const { deleteAlbum, updateAlbum } = albumSlice.actions;

export default albumSlice.reducer;
