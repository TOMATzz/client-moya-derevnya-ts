import { PayloadAction, createSlice } from '@reduxjs/toolkit'
//-------------isAuth----------------------
export interface IClickButtonOkInput {
   userClickButton: boolean
}
const initialState: IClickButtonOkInput = {
   userClickButton: false,
}



export const clickButtonOkInputSlice = createSlice({
   name: 'buttonOkInput',
   initialState,
   reducers: {
      setIsClickButtonOkInput: (state, actions: PayloadAction<boolean>) => {
         state.userClickButton = actions.payload
      }
   }
})
export const { setIsClickButtonOkInput } = clickButtonOkInputSlice.actions
export default clickButtonOkInputSlice.reducer