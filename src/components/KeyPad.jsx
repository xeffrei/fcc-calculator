import KeyPadButton from './KeyPadButton'

const KeyPad = (props) => {
  return (
    <div className='keypad'>
      <div className='key-row'>
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
