import {configureStore} from '@reduxjs/toolkit';

//import reducer
import homeReducer from './screen/home/HomeSlice';

export default store = configureStore({
  reducer: {
    homeReducer
  },
});
