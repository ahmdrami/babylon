export const extractFirstLastNameInitial = (firstName, lastName) => {
  if (firstName && lastName) {
    return firstName[0].toUpperCase() + lastName[0].toUpperCase()
  }
  return ''
}

export const extractAndSortDates = (data = [], consultantType) => {
  const dates = []
  data
    .sort((a, b) => new Date(a.time) - new Date(b.time))
    .forEach(item => {
      if (item.consultantType.includes(consultantType)) {
        dates.push(item.time)
      }
    })
  return dates
}

export const parseDate = value => {
  const date = new Date(Date.parse(value))

  return `${
    isTodayDate(date)
      ? 'Today'
      : `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
  }  ${date.getHours()}:${date.getMinutes()}`
}

export const isTodayDate = date => {
  const todaysDate = new Date()
  return (
    date.getDate() === todaysDate.getDate() &&
    date.getMonth() === todaysDate.getMonth() &&
    date.getFullYear() === todaysDate.getFullYear()
  )
}
