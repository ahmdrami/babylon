import React from 'react'
import styled from 'styled-components'
import Proptypes from 'prop-types'

const StyledTextarea = styled.textarea`
  border-radius: 10px;
  height: 10em;
  padding: 1em;
  border: 1px solid ${({ theme }) => theme.colors.borderStandard};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.secondaryDark};
  font-weight: 300;
`
const Textarea = ({ value, onChange, placeholder }) => {
  return (
    <StyledTextarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

Textarea.propTypes = {
  value: Proptypes.string.isRequired,
  placeholder: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
}
export default Textarea
