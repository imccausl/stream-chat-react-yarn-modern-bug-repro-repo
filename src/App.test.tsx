import App from './App'
import React from 'react'
import { render } from '@testing-library/react'

it('renders learn react link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeTruthy()
})
