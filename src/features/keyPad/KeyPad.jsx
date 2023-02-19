import NumberPad from './NumberPad'
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
      <KeyPadButton
        {...get(KeyPadButtons, 'clear')}
        onClick={() => dispatch(clear())}
      />
      <NumberPad onClick={(num) => dispatch(input(num))} />
      <KeyPadButton
        {...get(KeyPadButtons, 'decimal')}
        onClick={() => dispatch(inputDecimal())}
      />
      <KeyPadButton
        {...get(KeyPadButtons, 'multiply')}
        onClick={() => dispatch(inputOperator('*'))}
      />
      <KeyPadButton
        {...get(KeyPadButtons, 'divide')}
        onClick={() => dispatch(inputOperator('/'))}
      />
      <KeyPadButton
        {...get(KeyPadButtons, 'subtract')}
        onClick={() => dispatch(inputOperator('-'))}
      />
      <KeyPadButton
        {...get(KeyPadButtons, 'add')}
        onClick={() => dispatch(inputOperator('+'))}
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
