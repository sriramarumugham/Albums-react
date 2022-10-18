import {createSlice , createAsyncThunk, bindActionCreators} from '@reduxjs/toolkit';


//state
const initialState={
    albums:{}
}


//thunks

export const fetchAsyncAlbums=createAsyncThunk(
    'albums/fetchAsyncAlbums',
    async()=>{      
      const response=await fetch('https://jsonplaceholder.typicode.com/albums');
      const data= await response.json();
      console.log(data);
      return data;
    }
   
);

const albumSlice=createSlice({
    name:"albums",
    initialState,
    reducers:{
        deleteAlbum: (state , {payload})=>{
            state.albums.albums=
            state.albums.albums.filter((album)=> album.id !=payload.id);
        },

        updateAlbum:(state , {payload})=>{
            
            state.albums.albms.map((album)=>{
                if(album.id=== payload.id){
                    album.title=payload.title;
                }
            })
        }
    },
    extraReducers:{
        [fetchAsyncAlbums.fulfilled]: (state , {payload})=>{
           console.log("fulfilled got the albums");
           return {...state , albums:payload}
        }
    }
})


export const getAllAlbums=(state)=>state.albums.albums;

export default albumSlice.reducer;