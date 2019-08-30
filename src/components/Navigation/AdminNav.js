import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <ul className='nav-ul'>
    <li className='nav-li'>
      <Link className='nav-li' to='/login'>LogOut</Link>
    </li>
    <li className='nav-li'>
      <Link className='nav-li' to='/'>Graded Assignments</Link>
    </li>
    <li className='nav-li'>
      <Link className='nav-li' to='/'>Ungraded Assignments</Link>
    </li>
    <li className='nav-li'>
      <Link className='nav-li' to='/'>All Students</Link>
    </li>
  </ul>
)