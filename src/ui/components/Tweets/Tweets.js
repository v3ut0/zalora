import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tweet from '../Tweet/Tweet'

class Tweets extends Component {
  render() {
    const { data: tweets } = this.props
    return (
      <div className='tweets'>
        {
          tweets.map((tweet, index) => <Tweet key={index} data={tweet}/>)
        }
      </div>
    )
  }
}

Tweets.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Tweets
