import { PayloadAction, createSlice } from '@reduxjs/toolkit'
//-------------isAuth----------------------
export interface IClickButtonRegistration {
   userClickButton: boolean
}
const initialState: IClickButtonRegistration = {
   userClickButton: false,
}



export const clickButtonRegistrationSlice = createSlice({
   name: 'buttonRegistration',
   initialState,
   reducers: {
      setIsClickButtonRegistration: (state, actions: PayloadAction<boolean>) => {
         state.userClickButton = actions.payload
      }
   }
})
export const { setIsClickButtonRegistration } = clickButtonRegistrationSlice.actions
export default clickButtonRegistrationSlice.reducer