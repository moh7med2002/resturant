import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode:"light",
  lang:"en"
}

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    changeMode: (state,action) => {
        state.mode = action.payload.mode;
    },
    changeLang : (state,action) => {
      state.lang = action.payload.lang
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeMode,changeLang} = modeSlice.actions

export default modeSlice.reducer