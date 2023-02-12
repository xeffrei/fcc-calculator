import { createSlice } from '@reduxjs/toolkit'

export const displaySlice = createSlice({
  name: 'display',
  initialState: {
    outputValue: '666',
    inputValue: '88',
  },
  reducers: {
    clear: (state) => {
      state.outputValue = '0'
      state.inputValue = '0'
    },
    reset: (state) => {
      state.outputValue = '666'
      state.inputValue = '88'
    },
  },
})

export const { clear, reset } = displaySlice.actions
export const selectDisplay = (state) => {
  return {
    inputValue: state.display.inputValue,
    outputValue: state.display.outputValue,
  }
}
export default displaySlice.reducer
