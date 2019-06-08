import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.borderStandard};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  width: 75px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.positive};
    color: white;
  }
  input {
    display: none;
  }
`
const ImageUpload = () => {
  return (
    <Label htmlFor="image-upload">
      <input type="file" id="image-upload" />+
    </Label>
  )
}

export default ImageUpload
