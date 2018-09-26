import React, { Component } from 'react'

class Tweet extends Component {
  render() {
    const { data: { msg } } = this.props
    return (
      <div>
        <p>{ msg }</p>
        <hr/>
      </div>
    )
  }
}

export default Tweet
