import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  padding: 2em 0;
  align-items: flex-start;
  svg {
    flex: 10%;
    stroke: ${({ theme }) => theme.colors.secondaryDark};
    height: 36px;
    width: 36px;
  }
  h3 {
    font-size: 2em;
    margin: 0;
    margin-bottom: 1em;
  }
`

const Content = styled.div`
  display: flex;
  flex: 80%;
  flex-direction: column;
  padding: 0 2em;
`
const IconTitle = ({ title, icon, children }) => {
  return (
    <Container>
      {icon}
      <Content>
        <h3>{title}</h3>
        {children}
      </Content>
    </Container>
  )
}

IconTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
}

export default IconTitle
