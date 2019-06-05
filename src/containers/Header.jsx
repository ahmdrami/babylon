import React from 'react'
import logo from '../assets/logo.png'
import styled from 'styled-components'
import { ReactComponent as BurgerMenu } from '../assets/svgs/burger-menu.svg'

const StyledHeader = styled.header`
  display: flex;
`
const Header = () => {
  return (
    <StyledHeader>
      <BurgerMenu/>
      <img src={logo} alt="babylon-logo"/>
    </StyledHeader>
  )
}


export default Header
