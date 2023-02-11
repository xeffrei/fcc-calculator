import NumberPad from './NumberPad'
import keyPadStyles from './KeyPad.module.css'
import { getKeyPadButtons} from '../util/constants'

const KeyPad = (props) => {
  return (
    <div className={keyPadStyles.keypad} data-testid='keypad'>
      <NumberPad />
      <div className={keyPadStyles.keyRow}>
        {getKeyPadButtons()}
      </div>
    </div>
  )
}

export default KeyPad
