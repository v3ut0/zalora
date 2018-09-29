import React from 'react'
import { mount } from 'enzyme'
import sinon from 'sinon'
import Home from './Home'

it('Home', () => {
  const tweets = [{ message: ['hello', 'world'] }]
  const addTweet = sinon.spy()
  const wrapper = mount(<Home tweets={tweets} addTweet={addTweet}/>)
  expect(wrapper.find('TweetComposer').length).toEqual(1)
  expect(wrapper.find('Tweets').length).toEqual(1)
  expect(wrapper.find('Tweets').find('p').length).toEqual(2)
})
