import NumberPad from './NumberPad'
import keyPadStyles from './KeyPad.module.css'
import KeyPadButton from '../../components/KeyPadButton'
import { clear, input, inputDecimal } from '../display/displaySlice'
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
      <KeyPadButton {...get(KeyPadButtons, 'multiply')} />
      <KeyPadButton {...get(KeyPadButtons, 'divide')} />
      <KeyPadButton {...get(KeyPadButtons, 'subtract')} />
      <KeyPadButton {...get(KeyPadButtons, 'add')} />
      <KeyPadButton {...get(KeyPadButtons, 'equals')} />
      <KeyPadButton
        {...get(KeyPadButtons, 'decimal')}
        onClick={() => dispatch(inputDecimal())}
      />
      <NumberPad onClick={(num) => dispatch(input(num))} />
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
