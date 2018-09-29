import { compose, withState, withHandlers } from 'recompose'
import TweetComposer from './TweetComposer'
import { utils } from '../../../lib'

export default compose(
  withState('msg', 'updateMsg', ''),
  withHandlers({
    submitMsg: ({ updateMsg, msg, onTweet: addTweet }) => (ev) => {
      ev.preventDefault()
      updateMsg('')
      if (msg) {
        if (msg.length <= 50) return addTweet({ message: [msg] })
        try {
          const msgs = utils.splitMessage(msg, 50)
          const message = msgs.map(m => [m.indicator].concat(m.words).join(' '))
          addTweet({ message })
        } catch (e) {
          alert('Invalid tweet')
        }
      }
    },
  }),
)(TweetComposer)
