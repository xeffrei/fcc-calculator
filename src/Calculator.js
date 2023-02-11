import './Calculator.css'
import Display from './components/Display'
import KeyPad from './components/KeyPad'

const Calculator = () => {
  return (
    <div
      id='calculator'
      data-testid='calculator'
    >
      <code>some day I will be a calculator</code>
      <Display></Display>
      <KeyPad></KeyPad>
    </div>
  )
}

export default Calculator
