import reducer from './displaySlice'
import { setupStore } from '../../app/store'

test('reducers', () => {
  let state
  state = reducer(undefined, { type: 'display/reset' })
  console.log('state', state)
  expect(state).toEqual({ outputValue: '666', inputValue: '88' })
  state = reducer(undefined, { type: 'display/clear' })
  console.log('state', state)
  expect(state).toEqual({ outputValue: '0', inputValue: '0' })
})
