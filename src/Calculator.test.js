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
    const display = screen.getByTestId('input-display')
    expect(display).toBeInTheDocument()
    expect(display.id).toBe('display')
  })

  it('has a clear button that clears the displays', () => {
    const subject = renderWithProviders(<Calculator />)
    const clearButton = screen.getByTestId('clear')
    expect(clearButton).toBeInTheDocument()

    const inputDisplay = screen.getByTestId('input-display')
    expect(inputDisplay.textContent).toBe('07734')
    const outputDisplay = screen.getByTestId('output-display')
    expect(outputDisplay.textContent).toBe('666')

    const button1 = screen.getByTestId('one')
    userEvent.click(button1)
    expect(inputDisplay.textContent).toBe('077341')

    userEvent.click(clearButton)
    expect(inputDisplay.textContent).toBe('0')
    expect(outputDisplay.textContent).toBe('0')
  })
})

it('prints input to the input display', () => {
  const subject = renderWithProviders(<Calculator />)
  const inputDisplay = screen.getByTestId('input-display')
  const button1 = screen.getByTestId('one')
  const button2 = screen.getByTestId('two')
  const button3 = screen.getByTestId('three')
  const clearButton = screen.getByTestId('clear')

  userEvent.click(clearButton)

  userEvent.click(button1)
  expect(inputDisplay.textContent).toBe('1')

  userEvent.click(button2)
  userEvent.click(button3)
  expect(inputDisplay.textContent).toBe('123')
})

it('does not allow leading zeros', () => {
  const subject = renderWithProviders(<Calculator />)
  const inputDisplay = screen.getByTestId('input-display')
  const button0 = screen.getByTestId('zero')
  const button1 = screen.getByTestId('one')
  const clearButton = screen.getByTestId('clear')

  userEvent.click(clearButton)

  userEvent.click(button0)
  expect(inputDisplay.textContent).toBe('0')

  userEvent.click(button0)
  expect(inputDisplay.textContent).toBe('0')

  userEvent.click(button1)
  expect(inputDisplay.textContent).toBe('1')
})
