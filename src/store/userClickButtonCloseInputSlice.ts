import { PayloadAction, createSlice } from '@reduxjs/toolkit'
//-------------isAuth----------------------
export interface IClickButtonCloseInput {
   userClickButton: boolean
}
const initialState: IClickButtonCloseInput = {
   userClickButton: false,
}



export const clickButtonCloseInputSlice = createSlice({
   name: 'buttonCloseInput',
   initialState,
   reducers: {
      setIsClickButtonCloseInput: (state, actions: PayloadAction<boolean>) => {
         state.userClickButton = actions.payload
      }
   }
})
export const { setIsClickButtonCloseInput } = clickButtonCloseInputSlice.actions
export default clickButtonCloseInputSlice.reducer