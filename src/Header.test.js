import React from 'react'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './Header'

//Jest command
afterEach(cleanup)

//Jest command
it("renders", () => {
  const { asFragment } = render(<Header text="Hello!" />)
  //asFragment = chunk of HTML that was rendered
  expect(asFragment()).toMatchSnapshot()
})

it("inserts text in h1", () => {
  const { getByTestId, getByText } = render(<Header text="Hello!" />)
  //lots of other ways to get HTML

  expect(getByTestId('h1tag')).toHaveTextContent('Hello!')
  expect(getByText('Hello!')).toHaveClass('fancy-h1')
})