import React from 'react'
import { render } from '@testing-library/react'
import AvailableOptions from '../AvailableOptions'
import theme from '../../theme'
import { ThemeProvider } from 'styled-components'

const props = {
  title: 'Test title',
  icon: <span>icon</span>,
  options: ['aasd', 'b'],
  onClick: () => () => 'test',
  value: '',
}

const { getByText } = render(
  <ThemeProvider theme={theme}>
    <AvailableOptions {...props} />
  </ThemeProvider>
)
describe('AvailableOptions component', () => {
  it('should render the component and look for h3 element text content', () => {
    const element = getByText(props.title)
    expect(element.textContent).toEqual(props.title)
  })
  
  it('should render 2 options', () => {
    expect(document.querySelectorAll('button').length).toEqual(2)
  })
})
