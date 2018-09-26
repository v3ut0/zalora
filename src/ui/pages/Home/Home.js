import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { compose, withState, withHandlers } from 'recompose'
import { TweetComposer, Tweet } from '../../components'
import './Home.css'

class Home extends Component {
  render() {
    const { tweets, addTweet } = this.props
    return (
      <Container id='home'>
        <TweetComposer onTweet={addTweet}/>
        <div className='tweet-list'>
          {
            tweets.map((tweet, index) => <Tweet key={index} data={tweet}/>)
          }
        </div>
      </Container>
    )
  }
}

export default compose(
  withState('tweets', 'updateTweets', []),
  withHandlers({
    addTweet: ({ updateTweets, tweets }) => (tweet) => {
      updateTweets([tweet].concat(tweets))
    },
  }),
)(Home)
