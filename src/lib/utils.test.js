import seedrandom from 'seedrandom'
import utils from './utils'

const rng = seedrandom('zalora')
it('simple-split', () => {
  const MSG_SIZE = 50
  const msg = 'I can\'t believe Tweeter now supports chunking my messages, so I don\'t have to do it myself.'
  const values = utils.splitMessage(msg, MSG_SIZE)
  const tweets = ['1/2 I can\'t believe Tweeter now supports chunking', '2/2 my messages, so I don\'t have to do it myself.']
  tweets.forEach((tweet, index) => {
    const { words, indicator } = values[index]
    expect([indicator].concat(words).join(' ')).toEqual(tweet)
  })
})

it('spaces-split', () => {
  const MSG_SIZE = 50
  const msg = 'I love  you    so   much    '
  const values = utils.splitMessage(msg, MSG_SIZE)
  expect(values[0].sum).toEqual(22)
  expect(values[0].words).toEqual(['I', 'love', 'you', 'so', 'much'])
})

it('complex-split', () => {
  const WORD_SIZE = 50
  const MSG_SIZE = 50
  const dictionary = []
  let char = ''
  let msg = ''
  for (let i = 0; i < WORD_SIZE; i += 1) {
    char += 'a'
    dictionary.push(char)
  }
  const rand = max => Math.round(rng() * max)
  for (let i = 0; i < 1000; i += 1) {
    msg += ` ${dictionary[rand(WORD_SIZE - 20)]}`
  }
  const values = utils.splitMessage(msg, MSG_SIZE)
  values.forEach(({ words, sum, indicator }) => {
    const wordsLen = words.reduce((r, n) => r + n.length, 0)
    const msgLen = wordsLen + indicator.length + words.length
    expect(msgLen).toEqual(sum)
    expect(sum).toBeLessThanOrEqual(50)
  })
  for (let i = 0; i < 1000; i += 1) {
    msg += ` ${dictionary[rand(WORD_SIZE - 1)]}`
  }
  try {
    utils.splitMessage(msg, MSG_SIZE)
    expect(false).toEqual(true)
  } catch (e) {
    expect(e.message).toEqual('No answer')
  }
})
