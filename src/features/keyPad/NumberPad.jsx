import KeyPadButton from '../../components/KeyPadButton'
import { NumberStringMap, NumPadRows } from '../../util/constants'
import keyPadStyles from './KeyPad.module.css'

const NumberPad = (props) => {
  return (
    <div
      className='number-pad'
      data-testid='number-pad'
    >
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
                  data-testid={NumberStringMap[num]}
                  value={num}
                  onClick={() => props.onClick(num)}
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
