import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    market:null,
    token:null
}

export const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    marketLogin: (state,action) => {
        state.market = action.payload.market;
        state.token = action.payload.token;
    },
    marketLogout : (state,action) => {
      state.market = null;
      state.token = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { marketLogin,marketLogout} = marketSlice.actions

export default marketSlice.reducer