import KeyPadButton from './KeyPadButton'
import { NumberStringMap, NumPadRows } from '../util/constants'
import keyPadStyles from './KeyPad.module.css'

const NumberPad = (props) => {
  return (
    <div className='number-pad'>
      {NumPadRows.map((row, i) => {
        return (
          <div
            className={keyPadStyles.keyRow}
            key={i}
          >
            {row.map((num, j) => {
              return (
                <KeyPadButton
                  id={NumberStringMap[num]}
                  value={num}
                  type='number'
                  key={j}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default NumberPad
