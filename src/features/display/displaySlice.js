import { createSlice } from '@reduxjs/toolkit'
import { evaluate as evalExpr } from 'mathjs'
import { last } from 'lodash'

const initialState = {
  inputValue: '0',
}

const operatorRegex = /(^[+\-*/]$)/g

const tokenize = (inputValue) => {
  const tokens = []
  const regex = /(-?\d+\.?\d*)|([+\-*/])/g
  let match
  while ((match = regex.exec(inputValue))) {
    tokens.push(match[0])
  }
  return tokens
}

export const displaySlice = createSlice({
  name: 'display',
  initialState: initialState,
  reducers: {
    clear: (state) => initialState,
    input: (state, action) => {
      state.inputValue =
        state.inputValue === '0'
          ? '' + action.payload
          : '' + state.inputValue + action.payload
    },
    inputDecimal: (state) => {
      const tokens = tokenize(state.inputValue)
      const lastToken = last(tokens)
      if (lastToken.includes('.')) {
        return
      } else if (lastToken.match(operatorRegex) || !lastToken) {
        state.inputValue = state.inputValue + '0.'
      } else {
        state.inputValue = state.inputValue + '.'
      }
    },
    inputOperator: (state, action) => {
      const tokens = tokenize(state.inputValue)
      const lastToken = last(tokens)
      const penultimateToken = tokens[tokens.length - 2]
      if (lastToken.match(operatorRegex) && lastToken !== '-') {
        state.inputValue =
          action.payload === '-'
            ? state.inputValue + action.payload
            : state.inputValue.slice(0, -1) + action.payload
      } else if (lastToken === '-' && penultimateToken.match(operatorRegex)) {
        state.inputValue =
          action.payload === '-'
            ? state.inputValue + action.payload
            : state.inputValue.slice(0, -2) + action.payload
      } else {
        state.inputValue = state.inputValue + action.payload
      }
    },
    evaluate: (state) => {
      state.inputValue = evalExpr(state.inputValue) + ''
    },
  },
})

export const { clear, input, inputDecimal, evaluate, inputOperator } =
  displaySlice.actions
export const selectDisplay = (state) => {
  return {
    inputValue: state.display.inputValue,
  }
}
export default displaySlice.reducer
