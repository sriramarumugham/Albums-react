import {createSlice , createAsyncThunk, bindActionCreators} from '@reduxjs/toolkit';


//state
const initialState={
    albums:[]
}


//thunks 

//request example https://www.bezkoder.com/react-fetch-example/;

export const fetchAsyncAlbums=createAsyncThunk(
    'albums/fetchAsyncAlbums',
    async()=>{      
      const response=await fetch('https://jsonplaceholder.typicode.com/albums' );
      const data= await response.json();
      return data;
    }
);


export const deleteAsyncAlbum=createAsyncThunk(
    'albums/deleteAsyncAlbum',
    async(id)=>{      
      const response=await fetch(`https://jsonplaceholder.typicode.com/albums/${id}` , {
        method:'DELETE',
      } );
        console.log(response);
    }
   
);


export const updateAsyncAlbum=createAsyncThunk(
    'albums/updateAsyncAlbum',
    async(data)=>{      
      const response=await fetch(`https://jsonplaceholder.typicode.com/albums/${data.id}` , {
        method:'PUT',
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
        body:JSON.stringify({
             id: data.id,
             title: data.title,
             userId: data.userId,
        })      
      } );
       console.log(response);
    }
   
);


const albumSlice=createSlice({
    name:"albums",
    initialState,
    reducers:{
        deleteAlbum: (state , {payload})=>{

            state.albums=
            state.albums.filter((album)=> album.id !=payload);
            console.log(state.albums);
        },

        updateAlbum:(state , {payload})=>{
          
            const data=payload.updatedAlbum;
            console.log(data);

           
            
            state.albums.map(album=>{
                if(album.id=== data.id){
                    album.title=data.title;
                }
            })

            // state.albums.map(album=>{
            //     if(album.id <=12){
            //       let style={height:"150px"};
            //       if(album.id%2==0){
            //         style.height="200px";
            //       }
            //       return <AlbumCard  id={album.id} style={style} name={album.title}  data={album}/>
            //     }
            //   })
            
        }
    },
    extraReducers:{
        [fetchAsyncAlbums.fulfilled]: (state , {payload})=>{
           console.log("fulfilled got the albums");
           return {...state , albums:payload}
        },
        [deleteAsyncAlbum.fulfilled]:()=>{
            console.log("deleted a album")
            return;
        }
        ,
        [updateAsyncAlbum.fulfilled]:()=>{
            console.log("updated a album")
            return;
        }
    }
})


export const getAllAlbums=(state)=>state.albums.albums;

       
export const {deleteAlbum , updateAlbum}=albumSlice.actions;

export default albumSlice.reducer;
