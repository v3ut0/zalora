import React from 'react'
import { shallow } from 'enzyme'
import Tweet from './Tweet'

it('Tweet', () => {
  const data = {
    message: ['hello', 'world'],
  }
  const wrapper = shallow(<Tweet data={data}/>)
  expect(wrapper.find('p').length).toEqual(2)
})
