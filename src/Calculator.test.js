import { render, screen } from '@testing-library/react'
import Calculator from './Calculator'

describe('Calculator', () => {
  it('has id of calculator', () => {
    render(<Calculator />)
    const calculator = screen.getByTestId('calculator')
    expect(calculator.id).toBe('calculator')
  })

  it('has a KeyPad component', () => {
    render(<Calculator />)
    const keypad = screen.getByTestId('keypad')
    expect(keypad).toBeInTheDocument()
  })

  it('has a display', () => {
    render(<Calculator />)
    const display = screen.getByTestId('display')
    expect(display).toBeInTheDocument()
    expect(display.id).toBe('display')
  })
})
