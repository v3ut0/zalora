import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'reactstrap'
import { TweetComposer, Tweets } from '../../components'
import './Home.css'

class Home extends Component {
  render() {
    const { tweets, addTweet } = this.props
    return (
      <Container id='home'>
        <TweetComposer onTweet={addTweet}/>
        <Tweets data={tweets}/>
      </Container>
    )
  }
}

Home.propTypes = {
  tweets: PropTypes.array.isRequired,
  addTweet: PropTypes.func.isRequired,
}

export default Home
