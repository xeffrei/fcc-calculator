import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  outputValue: '666',
  inputValue: '07734',
}

export const displaySlice = createSlice({
  name: 'display',
  initialState: initialState,
  reducers: {
    clear: (state) => {
      state.outputValue = '0'
      state.inputValue = '0'
    },
    reset: (state) => initialState,
    input: (state, action) => {
      state.inputValue =
        state.inputValue === '0'
          ? '' + action.payload
          : '' + state.inputValue + action.payload
    },
    inputDecimal: (state) => {
      if (state.inputValue.includes('.')) {
        return
      } else {
        state.inputValue = state.inputValue + '.'
      }
    },
  },
})

export const { clear, reset, input, inputDecimal } = displaySlice.actions
export const selectDisplay = (state) => {
  return {
    inputValue: state.display.inputValue,
    outputValue: state.display.outputValue,
  }
}
export default displaySlice.reducer
