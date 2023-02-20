import keyPadStyles from './KeyPad.module.css'
import KeyPadButton from '../../components/KeyPadButton'
import {
  clear,
  input,
  inputDecimal,
  evaluate,
  inputOperator,
} from '../display/displaySlice'
import { useDispatch, Provider } from 'react-redux'
import store from '../../app/store'
import { KeyPadButtons } from '../../util/constants'
import { get } from 'lodash'

export const KeyPad = (props) => {
  const dispatch = useDispatch()

  return (
    <div
      className={keyPadStyles.keypad}
      data-testid='keypad'
    >
      {firstRow(dispatch)}
      {secondRow(dispatch)}
      {thirdRow(dispatch)}
      {fourthRow(dispatch)}
      {fifthRow(dispatch)}
    </div>
  )
}

const firstRow = (dispatch) => {
  return (
    <div className={keyPadStyles.keyRow}>
      <KeyPadButton
        {...get(KeyPadButtons, 'clear')}
        onClick={() => dispatch(clear())}
      />
      <KeyPadButton
        {...get(KeyPadButtons, 'multiply')}
        onClick={() => dispatch(inputOperator('*'))}
      />
    </div>
  )
}

const secondRow = (dispatch) => {
  return (
    <div className={keyPadStyles.keyRow}>
      <KeyPadButton
        {...get(KeyPadButtons, 'seven')}
        onClick={() => dispatch(input(7))}
      />
      <KeyPadButton
        {...get(KeyPadButtons, 'eight')}
        onClick={() => dispatch(input(8))}
      />
      <KeyPadButton
        {...get(KeyPadButtons, 'nine')}
        onClick={() => dispatch(input(9))}
      />
      <KeyPadButton
        {...get(KeyPadButtons, 'divide')}
        onClick={() => dispatch(inputOperator('/'))}
      />
    </div>
  )
}

const thirdRow = (dispatch) => {
  return (
    <div className={keyPadStyles.keyRow}>
      <KeyPadButton
        {...get(KeyPadButtons, 'four')}
        onClick={() => dispatch(input(4))}
      />
      <KeyPadButton
        {...get(KeyPadButtons, 'five')}
        onClick={() => dispatch(input(5))}
      />
      <KeyPadButton
        {...get(KeyPadButtons, 'six')}
        onClick={() => dispatch(input(6))}
      />
      <KeyPadButton
        {...get(KeyPadButtons, 'add')}
        onClick={() => dispatch(inputOperator('+'))}
      />
    </div>
  )
}

const fourthRow = (dispatch) => {
  return (
    <div className={keyPadStyles.keyRow}>
      <KeyPadButton
        {...get(KeyPadButtons, 'one')}
        onClick={() => dispatch(input(1))}
      />
      <KeyPadButton
        {...get(KeyPadButtons, 'two')}
        onClick={() => dispatch(input(2))}
      />
      <KeyPadButton
        {...get(KeyPadButtons, 'three')}
        onClick={() => dispatch(input(3))}
      />
      <KeyPadButton
        {...get(KeyPadButtons, 'subtract')}
        onClick={() => dispatch(inputOperator('-'))}
      />
    </div>
  )
}

const fifthRow = (dispatch) => {
  return (
    <div className={keyPadStyles.keyRow}>
      <KeyPadButton
        {...get(KeyPadButtons, 'zero')}
        onClick={() => dispatch(input(0))}
      />
      <KeyPadButton
        {...get(KeyPadButtons, 'decimal')}
        onClick={() => dispatch(inputDecimal())}
      />
      <KeyPadButton
        {...get(KeyPadButtons, 'equals')}
        onClick={() => dispatch(evaluate())}
      />
    </div>
  )
}

export const KeyPadProvider = (props) => {
  return (
    <Provider store={store}>
      <KeyPad props />
    </Provider>
  )
}

export default KeyPadProvider
