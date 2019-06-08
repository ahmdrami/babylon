import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Banner from '../components/Banner'
import { StateContext } from '../App'
import AvailableOptions from '../components/AvailableOptions'
import { ReactComponent as ConsultantIcon } from '../assets/svgs/consultant.svg'
import { ReactComponent as ClockIcon } from '../assets/svgs/clock.svg'
import { ReactComponent as ImgIcon } from '../assets/svgs/img.svg'
import { ReactComponent as NotesIcon } from '../assets/svgs/notes.svg'
import { ReactComponent as VideoIcon } from '../assets/svgs/video.svg'
import IconTitle from '../components/IconTitle'
import { API_ENDPOINT } from '../config'
import { extractAndSortDates, isValidForm } from '../utils'
import Textarea from '../components/Textarea'
import ImageUpload from '../components/ImageUpload'
import Hr from '../components/Hr'
import Button from '../components/Button'

const AppointmentContainer = styled.div`
  padding: 3em 2em;
`
const formState = {
  consultantType: '',
  dateTime: '',
  appointmentType: '',
  notes: '',
  photo: '',
}
const NewAppointment = () => {
  const { consultantTypes, user } = useContext(StateContext)

  const [form, setForm] = useState(() => formState)
  const [state, setState] = useState(() => ({
    availableTime: [],
    appointmentTypes: [],
    allSlots: [],
  }))

  const filterDates = consultantType => () => {
    setForm(ps => ({
      ...ps,
      consultantType,
    }))
    fetchAppointments(consultantType)
  }

  const updateDateTime = dateTime => () => {
    const appointmentTypes = state.allSlots.find(slot => slot.time === dateTime)

    setState(ps => ({
      ...ps,
      appointmentTypes: appointmentTypes
        ? appointmentTypes.appointmentType
        : [],
    }))
    setForm(ps => ({
      ...ps,
      dateTime,
    }))
  }
  const updateNotes = ({ target: { value } }) =>
    setForm(ps => ({
      ...ps,
      notes: value,
    }))

  const updateAppointmentType = appointmentType => () =>
    setForm(ps => ({ ...ps, appointmentType }))

  const fetchAppointments = async consultantType => {
    try {
      let response = await fetch(`${API_ENDPOINT}/availableSlots`)
      response = await response.json()
      setState(ps => ({
        ...ps,
        allSlots: response,
        availableTime: extractAndSortDates(
          response,
          consultantType.toLowerCase()
        ),
      }))
    } catch (error) {
      console.log(error)
    }
  }

  const submit = async () => {
    try {
      await fetch(`${API_ENDPOINT}/appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          ...form,
        }),
      })
      setForm(formState)
      alert('Successful')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <AppointmentContainer>
      <Banner />
      <AvailableOptions
        title="Consultant type"
        icon={<ConsultantIcon />}
        value={form.consultantType}
        options={consultantTypes}
        onClick={filterDates}
      />
      <AvailableOptions
        title="Date &amp; Time"
        icon={<ClockIcon />}
        value={form.dateTime}
        options={state.availableTime}
        onClick={updateDateTime}
        limit={3}
        date
        placeholder="Please select a consultant"
      />
      <AvailableOptions
        title="Appointment type"
        icon={<VideoIcon />}
        options={state.appointmentTypes}
        value={form.appointmentType}
        onClick={updateAppointmentType}
        placeholder="Please select a date &amp; time"
      />

      <IconTitle title="Notes" icon={<NotesIcon />}>
        <Textarea
          value={form.notes}
          onChange={updateNotes}
          placeholder="Describe your symptoms"
        />
      </IconTitle>

      <IconTitle title="Attach a photo" icon={<ImgIcon />}>
        <ImageUpload />
      </IconTitle>
      <Hr />
      <Button disabled={!isValidForm(form, ['photo'])} onClick={submit}>
        Book
      </Button>
    </AppointmentContainer>
  )
}

export default NewAppointment
