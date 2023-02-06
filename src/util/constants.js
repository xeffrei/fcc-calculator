import KeyPadButton from "../components/KeyPadButton"
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

export const KeyPadButtons = [
  { id: 'clear', value: 'AC', type: 'function' },
  { id: 'divide', value: '/', type: 'operator' },
  { id: 'multiply', value: '*', type: 'operator' },
  { id: 'subtract', value: '-', type: 'operator' },
  { id: 'add', value: '+', type: 'operator' },
  { id: 'equals', value: '=', type: 'equals' },
  { id: 'decimal', value: '.', type: 'decimal' },
]

export const getNumPadButtons = () => {
  return Object.keys(NumberStringMap).map(button => {
    return (<KeyPadButton key={NumberStringMap[button]} id={NumberStringMap[button]} value={button} type='number' />)
  })
}

export const getKeyPadButtons = () => {
  return KeyPadButtons.map(button => {
    return (<KeyPadButton key={button.id} id={button.id} value={button.value} type={button.type} />)
  })
}