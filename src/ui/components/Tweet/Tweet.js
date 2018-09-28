import React, { Component } from 'react'
import './Tweet.css'

class Tweet extends Component {
  render() {
    const { data: { msg } } = this.props
    return (
      <div className='tweet'>
        <p>{ msg }</p>
        <hr/>
      </div>
    )
  }
}

export default Tweet
