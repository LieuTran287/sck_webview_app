import * as _ from 'lodash'
import moment from 'moment/moment'

export function validateEmail (email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email.toLowerCase())
}

export function validatePassword (email) {
  var re = /^(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
  return re.test(email.toLowerCase())
}

export function validateURL (url = '') {
  let re = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
  return re.test(url)
}

export const log = (...arg) => {
  if (__DEV__) {
    console.log(...arg)
  }
}

export function pad (digit) {
  let d = parseInt(digit.toString())
  return (d < 10) ? '0' + d.toString() : d.toString()
}

export function formatDateYYYYMMDD (dateFormatString) {
  return moment(dateFormatString, 'DD-MM-YYYY hh:mm:ss').toISOString()
}

export function validatePhoneNumber (phone) {
  return phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
}
