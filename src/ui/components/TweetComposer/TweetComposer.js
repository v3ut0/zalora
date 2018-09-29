import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Input,
  Button,
  Form,
  FormGroup,
} from 'reactstrap'

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

export default TweetComposer
