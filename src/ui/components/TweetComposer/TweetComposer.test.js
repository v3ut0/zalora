import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import TweetComposer from './TweetComposer'

it('TweetComposer', () => {
  const msg = 'hello world'
  const onTweet = sinon.spy()
  const updateMsg = sinon.spy()
  const submitMsg = sinon.spy()
  const wrapper = shallow(
    <TweetComposer
      msg={msg}
      updateMsg={updateMsg}
      submitMsg={submitMsg}
      onTweet={onTweet}
    />,
  )
  wrapper.find('Form').simulate('submit')
  expect(submitMsg.callCount).toEqual(1)
})
