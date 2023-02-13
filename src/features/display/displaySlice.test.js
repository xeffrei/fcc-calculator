import reducer from './displaySlice'

test('reducers', () => {
  let state
  state = reducer(undefined, { type: 'display/reset' })
  expect(state).toEqual({ outputValue: '666', inputValue: '07734' })

  state = reducer(undefined, { type: 'display/input', payload: '1' })
  expect(state).toEqual({ outputValue: '666', inputValue: '077341' })

  state = reducer(undefined, { type: 'display/clear' })
  expect(state).toEqual({ outputValue: '0', inputValue: '0' })

  state = reducer(undefined, { type: 'display/reset' })
  expect(state).toEqual({ outputValue: '666', inputValue: '07734' })
})
