import { extractFirstLastNameInitial } from "../utils";

describe('Util functions', () => {
  it('should return first and last name initials', () => {
    expect(extractFirstLastNameInitial('john', 'doe')).toEqual('JD')
    expect(extractFirstLastNameInitial('john', 'doe')).not.toEqual('Jd')
  })
  it('should return an empty string when either first or last name is missing', () => {
    expect(extractFirstLastNameInitial('john', '')).toEqual('')
  })
})