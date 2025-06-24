import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

beforeAll(() => {
  jest.spyOn(console, 'warn').mockImplementation(() => {})
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
}))

test('renders Task List page', () => {
  render(<App />)
  const titleElement = screen.getByText(/Task List/i)
  expect(titleElement).toBeInTheDocument()
})
