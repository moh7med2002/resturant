import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    admin:null,
    token:null
}

export const adminSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    adminLogin: (state,action) => {
        state.admin = action.payload.admin;
        state.token = action.payload.token;
    },
    adminLogout : (state,action) => {
      state.admin = null;
      state.token = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { adminLogin,adminLogout} = adminSlice.actions

export default adminSlice.reducer