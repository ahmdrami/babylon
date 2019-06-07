import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Banner from '../components/Banner'
import { StateContext } from '../App';

const NewAppointment = () => {
  const { consultantType } = useContext(StateContext)
  return (
    <Fragment>
      <Banner />
    </Fragment>
  )
}

NewAppointment.propTypes = {}

export default NewAppointment
