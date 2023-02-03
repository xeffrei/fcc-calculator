import KeyPadButton from './KeyPadButton'
import NumberPad from './NumberPad'
import keyPadStyles from './KeyPad.module.css'

const KeyPad = (props) => {
  return (
    <div className={keyPadStyles.keypad}>
      <NumberPad />
      <div className={keyPadStyles.keyRow}>
        <KeyPadButton
          id='equals'
          value='='
          type='equals'
        />
      </div>
    </div>
  )
}

export default KeyPad
