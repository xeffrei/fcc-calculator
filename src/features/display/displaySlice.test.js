import { exp } from 'mathjs'
import reducer from './displaySlice'

test('reducers', () => {
  let state = { inputValue: '7734' }

  state = reducer(state, { type: 'display/input', payload: '1' })
  expect(state).toEqual({ inputValue: '77341' })

  state = reducer(undefined, { type: 'display/clear' })
  expect(state).toEqual({ inputValue: '0' })

  state = { inputValue: '7734' }

  state = reducer(state, { type: 'display/inputOperator', payload: '+' })

  state = reducer(state, { type: 'display/input', payload: '1' })
  expect(state).toEqual({ inputValue: '7734+1' })

  state = reducer(state, { type: 'display/evaluate' })
  expect(state).toEqual({ inputValue: '7735' })
})

describe('inputDecimal', () => {
  test('should add a decimal if there is no decimal', () => {
    let state = { inputValue: '7734' }
    state = reducer(state, { type: 'display/inputDecimal' })
    expect(state).toEqual({ inputValue: '7734.' })
  })

  test('should not add a decimal if there is already a decimal in the last number token', () => {
    let state = { inputValue: '7734' }
    state = reducer(state, { type: 'display/inputDecimal' })
    state = reducer(state, { type: 'display/input', payload: '1' })
    state = reducer(state, { type: 'display/inputDecimal' })
    state = reducer(state, { type: 'display/input', payload: '1' })
    expect(state).toEqual({ inputValue: '7734.11' })
  })
})

describe('minus sign behavior', () => {
  let input = { inputValue: '3+5*6-2/4' }
  let state
  state = reducer(input, { type: 'display/clear' })
  expect(state).toEqual({ inputValue: '0' })

  state = reducer(state, { type: 'display/input', payload: '3' })
  expect(state).toEqual({ inputValue: '3' })

  state = reducer(state, { type: 'display/inputOperator', payload: '+' })
  expect(state).toEqual({ inputValue: '3+' })

  state = reducer(state, { type: 'display/input', payload: '5' })
  expect(state).toEqual({ inputValue: '3+5' })

  state = reducer(state, { type: 'display/inputOperator', payload: '*' })
  expect(state).toEqual({ inputValue: '3+5*' })

  state = reducer(state, { type: 'display/input', payload: '6' })
  expect(state).toEqual({ inputValue: '3+5*6' })

  state = reducer(state, { type: 'display/inputOperator', payload: '-' })
  expect(state).toEqual({ inputValue: '3+5*6-' })

  state = reducer(state, { type: 'display/input', payload: '2' })
  expect(state).toEqual({ inputValue: '3+5*6-2' })

  state = reducer(state, { type: 'display/inputOperator', payload: '/' })
  expect(state).toEqual({ inputValue: '3+5*6-2/' })
})
