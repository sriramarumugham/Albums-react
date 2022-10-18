import {configureStore} from '@reduxjs/toolkit';

import albumsReducer from './albums/albumSlice';

export const store=configureStore({
    reducer:{
        albums:albumsReducer
    }
})