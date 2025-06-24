import { render, screen } from '@testing-library/react'
import TaskList from './TaskList'
import { MemoryRouter } from 'react-router-dom'

beforeAll(() => {
  jest.spyOn(console, 'warn').mockImplementation(() => {})
  jest.spyOn(console, 'error').mockImplementation(() => {})
})


jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [] })),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
}))

jest.mock('react-toastify', () => ({
  toast: { error: jest.fn(), success: jest.fn() },
  ToastContainer: () => <div />,
}))

test('renders Task List title', () => {
  render(
    <MemoryRouter>
      <TaskList />
    </MemoryRouter>
  )
  const titleElement = screen.getByText(/Task List/i)
  expect(titleElement).toBeInTheDocument()
})
