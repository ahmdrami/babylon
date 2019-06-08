import {
  extractFirstLastNameInitial,
  extractAndSortDates,
  isValidForm,
} from '../utils'

describe('Util functions', () => {
  describe('extractFirstLastNameInitial fn', () => {
    it('should return first and last name initials', () => {
      expect(extractFirstLastNameInitial('john', 'doe')).toEqual('JD')
      expect(extractFirstLastNameInitial('john', 'doe')).not.toEqual('Jd')
    })
    it('should return an empty string when either first or last name is missing', () => {
      expect(extractFirstLastNameInitial('john', '')).toEqual('')
    })
  })

  describe('extractAndSortDates', () => {
    const unsortedDates = [
      {
        consultantType: ['gp'],
        time: '2019-11-27T10:11:00.000Z',
      },
      {
        consultantType: ['gp'],
        time: '2019-10-08T16:17:30.000Z',
      },
      {
        consultantType: ['gp'],
        time: '2019-09-23T18:20:00.000Z',
      },
      {
        consultantType: ['gp'],
        time: '2019-08-30T19:21:30.000Z',
      },
    ]
    const sortedDates = [
      '2019-08-30T19:21:30.000Z',
      '2019-09-23T18:20:00.000Z',
      '2019-10-08T16:17:30.000Z',
      '2019-11-27T10:11:00.000Z',
    ]

    it('should sort dates', () => {
      expect(extractAndSortDates(unsortedDates, 'gp')).toEqual(sortedDates)
    })
  })

  describe('isValidateForm', () => {
    it('should check the form and return false as email is required', () => {
      expect(
        isValidForm({ name: 'hi', email: '', profile: '' }, ['profile'])
      ).toEqual(false)
    })
    it('should check the form and return true as email is entered', () => {
      expect(
        isValidForm({ name: 'hi', email: 'test@gmail.com', profile: '' }, ['profile'])
      ).toEqual(true)
    })
    it('should check the form and return false as profile is required now', () => {
      expect(
        isValidForm({ name: 'hi', email: 'test@gmail.com', profile: '' }, [])
      ).toEqual(false)
    })
  })
})
