import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Profile = styled.div`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  overflow: hidden;
  border-radius: 50%;
  background-color: ${({ name, theme }) =>
    name ? theme.colors.secondaryDark : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5em;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`
const ProfilePicture = ({ img, name, size }) => {
  return (
    <Profile size={size} name={name}>
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
