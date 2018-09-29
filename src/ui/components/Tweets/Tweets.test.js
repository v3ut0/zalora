import React from 'react'
import { shallow } from 'enzyme'
import Tweets from './Tweets'
import Tweet from '../Tweet/Tweet'

it('Tweets', () => {
  const data = [
    { message: ['hello', 'you'] },
    { message: ['ping', 'pong'] },
  ]
  const wrapper = shallow(<Tweets data={data}/>)
  expect(wrapper.find(Tweet).length).toEqual(2)
})
