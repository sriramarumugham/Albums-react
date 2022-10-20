import {configureStore} from '@reduxjs/toolkit';


//abums reducer for actions related to albums

import albumsReducer from './albums/albumSlice';

export const store=configureStore({
    reducer:{
        albums:albumsReducer,
    }
})