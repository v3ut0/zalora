import { compose, withHandlers, withState } from 'recompose'
import Home from './Home'

export default compose(
  withState('tweets', 'updateTweets', []),
  withHandlers({
    addTweet: ({ updateTweets, tweets }) => (tweet) => {
      updateTweets([tweet].concat(tweets))
    },
  }),
)(Home)
