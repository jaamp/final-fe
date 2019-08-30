import React from 'react'

import DefaultNav from './DefaultNav'
import AdminNav from './AdminNav'
import StudentNav from './StudentNav'

export default ({ currentUserId,  logoutUser }) => (

    <div className='container'>
      {
        currentUserId
        ?<StudentNav currentUserId={currentUserId} logoutUser={logoutUser} />
        :<DefaultNav /> }
    </div>


)
