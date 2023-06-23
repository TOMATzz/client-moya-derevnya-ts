import { createSlice } from '@reduxjs/toolkit'
//-------------isAuth----------------------
export interface IAuth {
   isAuth: boolean
}
const initialState: IAuth = {
   isAuth: false,
}



export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setIsAuth: state => {
         state.isAuth = true
      }
   }
})
export const { setIsAuth } = authSlice.actions
export default authSlice.reducer




