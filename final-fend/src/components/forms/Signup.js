import React from 'react'
import Sform from './Sform'

export default ({ onSubmit }) => (
  <main className='container'>
    <section className='row justify-content-md-center'>
      <div className='col col-lg-5'>
        <h1>Signup</h1>
        <Sform onSubmit={onSubmit} />
      </div>
    </section>
  </main>
)
