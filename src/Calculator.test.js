import { render, screen } from '@testing-library/react'
import Calculator from './Calculator'

describe('Calculator', () => {
  it('has id of calculator', () => {
    render(<Calculator />)
    const calculator = screen.getByTestId('calculator')
    expect(calculator.id).toBe('calculator')
  })
})
