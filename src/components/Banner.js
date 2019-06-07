import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProfilePicture from './ProfilePicture';
import { StateContext } from '../App';

const HeaderContainer = styled.div`
  padding: 3em 2em;
  border: 1px solid ${({theme}) => theme.colors.borderStandard};
`
const StyledTitle = styled.h1`
  font-size: 3em;
`
const Banner = () => {
  const { user } = useContext(StateContext)

  return (
    <HeaderContainer>
      <StyledTitle>New Appointment</StyledTitle>
      <ProfilePicture img={user.avatar} size="80px"/>
    </HeaderContainer>
  )
}

Banner.propTypes = {
}

export default Banner
