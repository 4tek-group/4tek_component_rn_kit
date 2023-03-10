import Moment from 'moment'

export const format_ddMMyyyy = 'DD/MM/yyyy'
export const format_dd_mm_yyyy = 'DD-MM-yyyy'
export const format_hhmmDDMM = 'HH:mm, DD/MM'
export const format_DDMMHHmmm = 'DD-MM HH:mm'
export const format_hhMMDDMMYYYY = 'HH:mm, DD/MM/yyyy'
export const format_ddmm = 'DD/MM'
export const format_ddMMyyyy_hhmm = 'DD/MM/yyyy  |  hh:mm'
export const format_yyyyMMddTHHmmssZ = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
export const format_yyyyMMdd_HHmmss = 'YYYY-MM-DD HH-mm-ss'
export const format_yyyyMMdd_HHmmssz = 'YYYY-MM-DD HH:mm:ss'
export const format_yyyyMMdd = 'yyyy-MM-DD'
export const format_HHmmss = 'HH:mm:ss'
export const format_DDMMHHmm = 'DD/MM - HH:mm'
export const format_HHmm = 'HH:mm'
export const format_MMDD = 'MM-DD'
export const format_DDMM = 'DD-MM'

export const formatDate = ({ dateTime, format = 'HH:mm DD/MM/yyyy' }) => {
  return Moment(dateTime).format(format)
}

export const getDiffTime = (dateTime, dateTime2, format = 'seconds') => {
  return Moment(dateTime).diff(Moment(dateTime2), format)
}

export const getDiffTimeFromNow = (dateTime, format = 'seconds') => {
  return Moment(dateTime).diff(Moment(), format)
}

export const getWeekdays = () => {
  return [
    'T2',
    'T3',
    'T4',
    'T5',
    'T6',
    'T7',
    'CN',
  ]
}

export const getMonths = () => {
  return [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ]
}
