import request from './request'

const { NODE_ENV } = process.env
const BASE_URL = NODE_ENV === 'development'
  ? 'http://localhost:5000'
  : 'tbd' // Once we deploy, we need to change this

export const login = async (person) => {
  const response = await fetch(`${BASE_URL}/api/logins`, {
    body: JSON.stringify(person),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })
  const json = await response.json()

  return json
}

export const signup = async (person) => {
  const response = await fetch(`${BASE_URL}/api/signup`, {
    body: JSON.stringify(person),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })
  const json = await response.json()

  return json
}

export const profile = () => request('/api/profile')