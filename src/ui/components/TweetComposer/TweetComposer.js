import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose, withState, withHandlers } from 'recompose'
import {
  Input,
  Button,
  Form,
  FormGroup,
} from 'reactstrap'
import { utils } from '../../../lib'

class TweetComposer extends Component {
  render() {
    const {
      msg,
      updateMsg,
      submitMsg,
    } = this.props
    return (
      <Form onSubmit={submitMsg}>
        <FormGroup>
          <Input
            type='textarea'
            value={msg}
            onChange={ ev => updateMsg(ev.target.value) }
          />
        </FormGroup>
        <Button color='primary'>Submit</Button>
      </Form>
    )
  }
}

TweetComposer.propTypes = {
  msg: PropTypes.string.isRequired,
  updateMsg: PropTypes.func.isRequired,
  submitMsg: PropTypes.func.isRequired,
  onTweet: PropTypes.func.isRequired,
}

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
