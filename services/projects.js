import { URL_BASE } from './config'

function getProjects () {
  const URL = `${URL_BASE}projects`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }
  return fetch(URL, options)
}

export {
  getProjects
}
