import React from 'react'
import { withRouter } from 'react-router'

class Sform extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        lname: '',
        fname: '',
        email: '',
        password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange ({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.onSubmit(this.state)
      .then(() => this.props.history.push('/person'))
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
           <div className='form-group'>
          <label htmlFor='fname'>Your First Name</label>
          <input
            className='form-control'
            id='fname'
            onChange={this.handleChange}
            name='fname'
            type='text'
            value={this.state.fname} />
        </div>
        <div className='form-group'>
          <label htmlFor='lname'>Your Last Name</label>
          <input
            className='form-control'
            id='lname'
            onChange={this.handleChange}
            name='lname'
            type='text'
            value={this.state.lname} />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Your Email</label>
          <input
            className='form-control'
            id='email'
            onChange={this.handleChange}
            name='email'
            type='text'
            value={this.state.email} />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            className='form-control'
            id='password'
            onChange={this.handleChange}
            name='password'
            type='password'
            value={this.state.password} />
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    )
  }
}

export default withRouter(Sform)
