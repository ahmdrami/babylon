import React, { useContext } from 'react'
import styled from 'styled-components'
import ProfilePicture from './ProfilePicture'
import { StateContext } from '../App'
import Hr from './Hr'

const HeaderContainer = styled.div`
  margin: 3em 0;
`
const StyledTitle = styled.h1`
  font-size: 4em;
  color: ${({ theme }) => theme.colors.secondaryExtraDark};
`

const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  h4 {
    font-size: 2em;
    margin: 1em;
    color: ${({ theme }) => theme.colors.secondaryExtraDark};
  }
`
const Banner = () => {
  const { user } = useContext(StateContext)

  return (
    <HeaderContainer>
      <StyledTitle>New Appointment</StyledTitle>
      <ProfileContent>
        <ProfilePicture img={user.avatar} size="80px" />
        <h4>
          {user.firstName} {user.lastName}{' '}
        </h4>
      </ProfileContent>
      <Hr />
    </HeaderContainer>
  )
}

Banner.propTypes = {}

export default Banner
