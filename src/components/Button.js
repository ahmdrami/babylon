import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.positive};
  color: white;
  font-size: 24px;
  width: 100%;
  padding: 14px 32px;
`
Button.propTypes = {
  children: PropTypes.any.isRequired,
}

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children} </StyledButton>
}
