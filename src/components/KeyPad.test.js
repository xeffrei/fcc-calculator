import { render, screen } from '@testing-library/react'
import KeyPad from './KeyPad'

describe('KeyPad', () => {
  it('has a clickable equals button', () => {
    render(<KeyPad />)
    const equals = screen.getByText('=')
    expect(equals.id).toBe('equals')
    expect(equals.className).toBe('equals')
  })
})
