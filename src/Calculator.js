import React from 'react'
import './Calculator.css'
import Display from './features/display/Display'
import KeyPad from './features/keyPad/KeyPad'

const Calculator = () => {
  return (
    <div
      id='calculator'
      data-testid='calculator'
    >
      <code>some day I will be a calculator</code>
      <Display />
      <KeyPad />
    </div>
  )
}

export default Calculator
