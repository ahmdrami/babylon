import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import IconTitle from './IconTitle'
import { parseDate } from '../utils'

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Option = styled.button`
  border-radius: 5em;
  border: 1px solid ${({ theme }) => theme.colors.borderStandard};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.positive : 'white'};
  color: ${({ active, theme }) =>
    active ? 'white' : theme.colors.secondaryDark};
  transition: background-color 0.2s, color 0.2s;
  padding: 14px 32px;
  margin-right: 1em;
  margin-bottom: 1em;
  font-size: 24px;
`
const AvailableOptions = ({
  title,
  icon,
  options,
  onClick,
  value,
  limit,
  date,
}) => {
  let limitOptions = [...options]
  limitOptions = limit ? limitOptions.splice(0, limit) : limitOptions
  return (
    <IconTitle title={title} icon={icon}>
      <OptionsContainer>
        {limitOptions.length
          ? limitOptions.map(option => (
              <Option
                key={option}
                active={value === option}
                onClick={onClick(option)}
              >
                {date ? parseDate(option) : option}
              </Option>
            ))
          : `No ${title} available`}

        {limit && options.length > 3 && <Option>Another time</Option>}
      </OptionsContainer>
    </IconTitle>
  )
}

AvailableOptions.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  options: PropTypes.array,
  limit: PropTypes.any,
  date: PropTypes.bool,
}
AvailableOptions.defaultProps = {
  options: [],
  limit: null,
  date: false
}

export default AvailableOptions
