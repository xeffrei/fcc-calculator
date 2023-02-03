import { render, screen } from '@testing-library/react'
import Calculator from './Calculator'

describe('Calculator', () => {
  it('has id of calculator', () => {
    render(<Calculator />)
    const calculator = screen.getByTestId('calculator')
    expect(calculator.id).toBe('calculator')
  })

  it('has an equals button', () => {
    render(<Calculator />)
    const equals = screen.getByText('=')
    expect(equals.id).toBe('equals') 
  })
})
