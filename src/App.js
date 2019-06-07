import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Header from './containers/Header'
import NewAppointment from './containers/NewAppointment'
import { API_ENDPOINT } from './config'
import GlobalCSS from './GlobalCSS'

export const StateContext = React.createContext()
const App = () => {
  const [data, setData] = useState(() => ({
    user: {},
    appointmentSlots: [],
    consultantType: ['GP', 'Specialist', 'Nurse', 'Therapist', 'Triage Nurse'],
  }))

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    let response = await fetch(`${API_ENDPOINT}/users/1`)
    response = await response.json()
    setData(ps => ({
      ...ps,
      user: response,
    }))
  }
  const fetchAppointments = async () => {
    let response = await fetch(`${API_ENDPOINT}/users/1`)
    response = await response.json()
    setData(ps => ({
      ...ps,
      user: response,
    }))
  }
  return (
    <StateContext.Provider value={data}>
      <ThemeProvider theme={theme}>
        <div>
          <GlobalCSS />
          <Header />
          <NewAppointment />
        </div>
      </ThemeProvider>
    </StateContext.Provider>
  )
}

export default App
