import { render, screen } from '@testing-library/react'
import KeyPad from './KeyPad'
import { NumberStringMap as numbers } from '../util/constants'

describe('KeyPad', () => {
  it('has a clickable equals button', () => {
    render(<KeyPad />)
    const equals = screen.getByText('=')
    expect(equals.id).toBe('equals')
    expect(equals.className).toBe('equals')
  })

  it('has an element for each number 0-9', () => {
    render(<KeyPad />)
    Object.keys(numbers).forEach((number) => {
      const numberElement = screen.getByText(number)
      expect(numberElement.id).toBe(numbers[number])
    })
  })
})
