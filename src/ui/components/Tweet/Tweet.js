import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Tweet.css'

class Tweet extends Component {
  render() {
    const { data: { message } } = this.props
    return (
      <div className='tweet'>
        {
          message.map((m, index) => <p key={index}>{m}</p>)
        }
        <hr/>
      </div>
    )
  }
}

Tweet.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Tweet
