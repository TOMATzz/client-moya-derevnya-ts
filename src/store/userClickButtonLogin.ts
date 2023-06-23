import { PayloadAction, createSlice } from '@reduxjs/toolkit'
//-------------isAuth----------------------
export interface IClickButtonLogin {
   userClickButton: boolean
}
const initialState: IClickButtonLogin = {
   userClickButton: false,
}



export const clickButtonLoginSlice = createSlice({
   name: 'buttonLogin',
   initialState,
   reducers: {
      setIsClickButtonLogin: (state, actions: PayloadAction<boolean>) => {
         state.userClickButton = actions.payload
      }
   }
})
export const { setIsClickButtonLogin } = clickButtonLoginSlice.actions
export default clickButtonLoginSlice.reducer