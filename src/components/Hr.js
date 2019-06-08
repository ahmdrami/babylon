import React from 'react'
import styled from 'styled-components'
const StyledHr = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.borderStandard};
  margin: 2em 0;
  display: block;
`
export default function Hr() {
  return <StyledHr />
}
