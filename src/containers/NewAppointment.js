import React, { Fragment, useContext, useState } from 'react'
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
import { extractAndSortDates } from '../utils'
import Textarea from '../components/Textarea'
import ImageUpload from '../components/ImageUpload'
import Hr from '../components/Hr'
import Button from '../components/Button'

const formState = {
  consultantType: '',
  dateTime: '',
  appointmentType: '',
  notes: '',
  photo: '',
}
const NewAppointment = () => {
  const [form, setForm] = useState(() => formState)
  const [state, setState] = useState(() => ({
    availableTime: [],
    appointmentTypes: [],
  }))
  const { consultantTypes } = useContext(StateContext)

  const filterDates = consultantType => () => {
    setForm(ps => ({
      ...ps,
      consultantType,
    }))
    fetchAppointments(consultantType)
  }

  const updateDateTime = dateTime => () =>
    setForm(ps => ({
      ...ps,
      dateTime,
    }))
  const updateNotes = ({ target: { value } }) =>
    setForm(ps => ({
      ...ps,
      notes: value,
    }))

  const fetchAppointments = async consultantType => {
    let response = await fetch(`${API_ENDPOINT}/availableSlots`)
    response = await response.json()
    setState(() => ({
      availableTime: extractAndSortDates(
        response,
        consultantType.toLowerCase()
      ),
    }))
  }

  const submit = () => {}

  return (
    <Fragment>
      <Banner />
      <AvailableOptions
        title="Consultant type"
        icon={<ConsultantIcon />}
        value={form.consultantType}
        options={consultantTypes}
        onClick={filterDates}
      />
      <AvailableOptions
        title="Date & Time"
        icon={<ClockIcon />}
        value={form.dateTime}
        options={state.availableTime}
        onClick={updateDateTime}
        limit={3}
        date
      />
      <AvailableOptions
        title="Appointment type"
        icon={<VideoIcon />}
        value={form.appointmentType}
        onClick={filterDates}
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
      <Button onClick={submit}>Book</Button>
    </Fragment>
  )
}

export default NewAppointment
