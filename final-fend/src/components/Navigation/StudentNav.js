import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <ul className='nav-ul'>
    <li className='nav-li'>
      <Link className='nav-li' to='/login'>LogOut</Link>
    </li>
    <li className='nav-li'>
      <Link className='nav-li' to='/signup'>My Assignments</Link>
    </li>
    <li className='nav-li'>
      <Link className='nav-li' to='/signup'>All Students</Link>
    </li>
  </ul>
)