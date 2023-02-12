import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Calculator from './Calculator'
import { renderWithProviders } from './util/testUtils'

describe('Calculator', () => {
  it('has id of calculator', () => {
    renderWithProviders(<Calculator />)
    const calculator = screen.getByTestId('calculator')
    expect(calculator.id).toBe('calculator')
  })

  it('has a display', () => {
    renderWithProviders(<Calculator />)
    const display = screen.getByTestId('output-display')
    expect(display).toBeInTheDocument()
    expect(display.id).toBe('display')
    expect(display.textContent).toBe('666')
  })

  it('has a clear button that clears the displays', () => {
    const subject = renderWithProviders(<Calculator />)
    const clearButton = screen.getByTestId('clear')
    expect(clearButton).toBeInTheDocument()

    const inputDisplay = screen.getByTestId('input-display')
    expect(inputDisplay.textContent).toBe('88')
    const outputDisplay = screen.getByTestId('output-display')
    expect(outputDisplay.textContent).toBe('666')

    userEvent.click(clearButton)
    expect(inputDisplay.textContent).toBe('0')
    expect(outputDisplay.textContent).toBe('0')
  })
})
