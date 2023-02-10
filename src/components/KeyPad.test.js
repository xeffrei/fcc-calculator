import { render, screen } from '@testing-library/react'
import KeyPad from './KeyPad'
import { NumberStringMap as numbers, KeyPadButtons } from '../util/constants'

describe('KeyPad', () => {
  it('has an element for each number 0-9', () => {
    render(<KeyPad />)
    Object.keys(numbers).forEach((number) => {
      const numberElement = screen.getByText(number)
      expect(numberElement.id).toBe(numbers[number])
    })
  })

  it('has elements for each key pad button', () => {
    render(<KeyPad />)
    Object.keys(KeyPadButtons).forEach((button) => {
      const buttonElement = screen.getByText(KeyPadButtons[button].value)
      expect(buttonElement.id).toBe(KeyPadButtons[button].id)
    })
  })
})
