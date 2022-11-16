import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('display something', () => {
    render(<App />)
    expect(screen.getByText('Learn React')).toBeTruthy()
  })
})
