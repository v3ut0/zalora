import React, { Component } from 'react'
import {
  compose,
  withState,
  withHandlers,
} from 'recompose'
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

export default compose(
  withState('msg', 'updateMsg', ''),
  withHandlers({
    submitMsg: ({ updateMsg, msg, onTweet: addTweet }) => (ev) => {
      ev.preventDefault()
      updateMsg('')
      if (msg) {
        utils.splitMessage(msg)
        addTweet({ msg })
      }
    },
  }),
)(TweetComposer)
