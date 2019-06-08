import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Profile = styled.div`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  overflow: hidden;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5em;
`
const ProfilePicture = ({ img, name, size }) => {
  return (
    <Profile size={size}>
      {img ? <img src={img} alt="profile" /> : <span>{name}</span>}
    </Profile>
  )
}

ProfilePicture.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
}
ProfilePicture.defaultProps = {
  img: null,
  name: null,
  size: '50px',
}

export default ProfilePicture
