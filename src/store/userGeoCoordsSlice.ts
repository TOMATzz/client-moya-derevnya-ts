import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// const userGeoState = []

export interface IGeoPosition {
   // userGeoCoordes: {
   //    lat: number,
   //    lon: number,
   // }
   userGeoCoordes: number[]

}


const initialState: IGeoPosition = {
   // userGeoCoordes: {
   //    lon: 0,
   //    lat: 0,
   // }
   userGeoCoordes: [55.7522, 37.6156]

}

export const userGeoSlice = createSlice({
   name: 'userGeo',
   initialState,
   reducers: {
      setUserGeoCoords: (state, actions: PayloadAction<number[]>) => {


         state.userGeoCoordes = actions.payload




      }
   }
})
export const { setUserGeoCoords } = userGeoSlice.actions
export default userGeoSlice.reducer