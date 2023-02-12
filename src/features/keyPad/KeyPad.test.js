import { render, screen } from '@testing-library/react'
import { KeyPad } from './KeyPad'
import { NumberStringMap as numbers, KeyPadButtons } from '../../util/constants'
import { renderWithProviders } from '../../util/testUtils'

describe('KeyPad', () => {
  it('has an element for each number 0-9', () => {
    renderWithProviders(<KeyPad />)
    Object.keys(numbers).forEach((number) => {
      const numberElement = screen.getByText(number)
      expect(numberElement.id).toBe(numbers[number])
    })
  })

  it('has a clear button', () => {
    renderWithProviders(<KeyPad />)
    const clearButton = screen.getByTestId('clear')
    expect(clearButton).toBeInTheDocument()
    expect(clearButton.id).toBe('clear')
  })
})
