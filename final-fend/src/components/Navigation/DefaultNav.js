import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <ul className='nav-ul'>
    <li className='nav-li'>
      <Link className='nav-li' to='/login'>Login</Link>
    </li>
    <li className='nav-li'>
      <Link className='nav-li' to='/signup'>Signup</Link>
    </li>
  </ul>
)