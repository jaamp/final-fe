import * as token from '../helper/LocalStore'

const { NODE_ENV } = process.env
const BASE_URL = NODE_ENV === 'development'
  ? 'http://localhost:5000'
  : 'tbd' // Once we deploy, we need to change this

export default async (path, { body = null, method = 'GET' } = {}) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.getToken()}`
    },
    method
  }
  if (body) Object.assign(options, { body: JSON.stringify(body) })

  const response = await fetch(`${BASE_URL}${path}`, options)
  const json = await response.json()

  return json
}