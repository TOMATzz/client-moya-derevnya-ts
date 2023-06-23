import { PayloadAction, createSlice } from '@reduxjs/toolkit'
//-------------isAuth----------------------
export interface IClickGeoButton {
   userClickButton: boolean
}
const initialState: IClickGeoButton = {
   userClickButton: false,
}



export const clickGeoButtonSlice = createSlice({
   name: 'geoButton',
   initialState,
   reducers: {
      setIsClickGeoButton: (state, actions: PayloadAction<boolean>) => {
         state.userClickButton = actions.payload
      }
   }
})
export const { setIsClickGeoButton } = clickGeoButtonSlice.actions
export default clickGeoButtonSlice.reducer
