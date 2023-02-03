import './Calculator.css'
import KeyPad from './components/KeyPad'

const Calculator = () => {
  return (
    <div
      id='calculator'
      data-testid='calculator'
    >
      <code>some day I will be a calculator</code>
      <KeyPad></KeyPad>
    </div>
  )
}

export default Calculator
