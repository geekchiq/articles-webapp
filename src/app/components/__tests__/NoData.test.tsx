/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'

import NoData from '@/app/components/NoData'

describe('Button Components', () => {
  it('renders Button with children', () => {
    render(<NoData />)

    const buttonTest = screen.getByText('No Data Found')
    expect(buttonTest).toBeInTheDocument()
  })
})
