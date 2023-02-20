import KeyPadButton from '../components/KeyPadButton'
export const NumberStringMap = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
}

export const NumPadRows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]]

export const KeyPadButtons = {
  clear: { id: 'clear', value: 'AC', type: 'clear' },
  divide: { id: 'divide', value: '/', type: 'operator' },
  multiply: { id: 'multiply', value: '*', type: 'multiply' },
  subtract: { id: 'subtract', value: '-', type: 'operator' },
  add: { id: 'add', value: '+', type: 'operator' },
  equals: { id: 'equals', value: '=', type: 'equals' },
  decimal: { id: 'decimal', value: '.', type: 'decimal' },
  one: { id: 'one', value: '1', type: 'number' },
  two: { id: 'two', value: '2', type: 'number' },
  three: { id: 'three', value: '3', type: 'number' },
  four: { id: 'four', value: '4', type: 'number' },
  five: { id: 'five', value: '5', type: 'number' },
  six: { id: 'six', value: '6', type: 'number' },
  seven: { id: 'seven', value: '7', type: 'number' },
  eight: { id: 'eight', value: '8', type: 'number' },
  nine: { id: 'nine', value: '9', type: 'number' },
  zero: { id: 'zero', value: '0', type: 'number' },
}

export const getNumPadButtons = () => {
  return Object.keys(NumberStringMap).map((button) => {
    return (
      <KeyPadButton
        key={NumberStringMap[button]}
        id={NumberStringMap[button]}
        value={button}
        type='number'
      />
    )
  })
}
