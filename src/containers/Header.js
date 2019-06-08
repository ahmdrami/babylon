import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import styled from 'styled-components'
import { ReactComponent as BurgerIcon } from '../assets/svgs/burger-menu.svg'
import ProfilePicture from '../components/ProfilePicture'
import { StateContext } from '../App'
import { extractFirstLastNameInitial } from '../utils'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderStandard};
  padding: 1em 2em;

  img {
    margin: 0 auto;
    width: 210px;
    height: auto;
  }
`
const BurgerMenu = styled.button`
  background-color: transparent;
  border: none;
  svg {
    height: 45px;
    width: 45px;
    stroke-width: 1px;
  }
`

const Header = () => {
  const { user } = useContext(StateContext)

  return (
    <StyledHeader>
      <BurgerMenu>
        <BurgerIcon />
      </BurgerMenu>
      <img src={logo} alt="babylon-logo" />
      <ProfilePicture
        name={extractFirstLastNameInitial(user.firstName, user.lastName)}
      />
    </StyledHeader>
  )
}

export default Header
