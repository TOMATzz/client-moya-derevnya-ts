import { configureStore } from '@reduxjs/toolkit'

import isAuthReducer from './userAuthSlice';
import isUserGeoReducer from './userGeoCoordsSlice'
import clickButtonCloseInputrReducer from './userClickButtonCloseInputSlice';
import clickButtonOkInputReducer from './userClickButtonOkInputSlice';
import clickGeoButtonReducer from './userClickGeoButtonSlice'
import clickButtonRegistration from './userClickBattonRegistration'
import clickButtonLogin from './userClickButtonLogin';
// import userMapReducer from './userMapSlice'
export const store = configureStore({
   reducer: {
      auth: isAuthReducer,
      userGeo: isUserGeoReducer,
      buttonCloseInput: clickButtonCloseInputrReducer,
      geoButton: clickGeoButtonReducer,
      buttonOkInput: clickButtonOkInputReducer,
      buttonRegistration: clickButtonRegistration,
      buttonLogin: clickButtonLogin,
   }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch



