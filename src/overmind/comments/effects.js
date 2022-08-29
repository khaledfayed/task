import * as axios from 'axios'
import moment from 'moment'

export const api = {
  getComments () {
    axios.interceptors.request.use(
      function (req) {
        req.time = { startTime: new Date() }
        return req
      },
      err => {
        return Promise.reject(err)
      }
    )

    axios.interceptors.response.use(
      function (res) {
        res.config.time.endTime = new Date()
        res.duration = res.config.time.endTime - res.config.time.startTime
        return res
      },
      err => {
        return Promise.reject(err)
      }
    )

    return axios.get('https://jsonplaceholder.typicode.com/comments')
  }
}

export const localStorage = {
  saveData (title, data) {
    window.localStorage.setItem(title, JSON.stringify(data))
  },

  loadData (title) {
    return JSON.parse(window.localStorage.getItem(title))
  },
  push (title, date, latestData) {
    var localStorage = this.loadData(title)
    if (localStorage) {
      localStorage[date] = latestData
    } else {
      localStorage = {}
      localStorage[date] = latestData
    }

    window.localStorage.setItem(title, JSON.stringify(localStorage))
  }
}

export const utils = {
  time (timestamp) {
    return moment.unix(timestamp).format()
  }
}
