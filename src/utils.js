export const extractFirstLastNameInitial = (firstName, lastName) => {
  if (firstName && lastName) {
    return firstName[0].toUpperCase() + lastName[0].toUpperCase()
  }
  return ''
}
